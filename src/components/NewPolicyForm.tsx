import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField } from "./ui/form";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { formFields } from "@/config/formFields";
import FormFieldComponent from "./FormFieldComponent";
import { format, isAfter } from "date-fns";
import { calculateCommissionAmount } from "@/lib/utils";
import { policyApi } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const formSchema = z
    .object({
        id: z.number().optional(),
        clientName: z.string().min(1, "Client name is required"),
        clientPhone: z.coerce.number({
            invalid_type_error: "Should be Number",
        }),
        clientContact: z.string().min(1, "Client contact is required"),
        policyType: z.string().min(1, "Policy type is required"),
        companyName: z.string().min(1, "Company name is required"),
        policyNumber: z.string().min(1, "Policy Number is required"),
        policyStatus: z.string().min(1, "Policy status is required"),
        sumInsured: z.coerce
            .number({ invalid_type_error: "Should be Number" })
            .min(1, "Sum insured is required"),
        premiumAmount: z.coerce
            .number({ invalid_type_error: "Should be Number" })
            .min(1, "Premium amount is required"),
        startDate: z.coerce.string(),
        expiryDate: z.coerce.string(),
        commissionStatus: z.string().min(1, "Commission status is required"),
        commissionAmount: z.coerce
            .number({ invalid_type_error: "Should be Number" })
            .optional(),
        commissionRate: z.coerce
            .number({ invalid_type_error: "Should be Number" })
            .optional(),
        remarks: z.string().nullable().optional(),
    })
    .refine(
        (data) => isAfter(new Date(data.expiryDate), new Date(data.startDate)),
        {
            path: ["expiryDate"],
            message: "Expiry date must be greater than start date",
        }
    );

type FormValues = z.infer<typeof formSchema>;

function NewPolicyForm({
    closeDialog,
    defaultValues,
}: {
    closeDialog: () => void;
    defaultValues?: FormValues;
}) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    const premiumAmount = form.watch("premiumAmount");
    const commissionRate = form.watch("commissionRate");
    const commissionAmount =
        premiumAmount && commissionRate
            ? calculateCommissionAmount(premiumAmount, commissionRate)
            : 0;

    form.setValue("commissionAmount", commissionAmount);

    const mutation = useMutation({
        mutationFn: async (data: FormValues) => {
            if (defaultValues?.id) {
                await policyApi.updatePolicy(defaultValues.id, data);
            } else {
                await policyApi.createPolicy(data);
            }
        },
        onSuccess: async () => {
            // await queryClient.invalidateQueries({ queryKey: ["policies"] });

            closeDialog();
            form.reset();
            toast(
                defaultValues
                    ? "Policy updated successfully"
                    : "Policy added successfully"
            );
            setTimeout(() => {
                location.reload();
            }, 1000);
        },
        onError: () => {
            toast("Something went wrong");
        },
    });
    function onSubmit(data: FormValues) {
        const formattedData = {
            ...data,
            startDate: format(new Date(data.startDate), "MMM dd yyyy"),
            expiryDate: format(new Date(data.expiryDate), "MMM dd yyyy"),
        };
        mutation.mutate(formattedData);
        console.log(formattedData);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <ScrollArea className="h-[calc(100vh-12rem)]">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1 ">
                            <ClientDetailsFormField form={form} />
                        </div>
                        <div className="col-span-2 border-x">
                            <PolicyDetailsFormField form={form} />
                        </div>
                        <div className="col-span-1">
                            <CommissionFormField form={form} />
                        </div>
                    </div>
                    <div className="w-[50%] mt-8 px-4 mb-4">
                        <RemarksFormField form={form} />
                    </div>
                </ScrollArea>
                <div className="h-2" />
                <Button className="w-full" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}

function ClientDetailsFormField({ form }: any) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-center mb-4">
                Client Details
            </h3>
            <div className="flex flex-col gap-6 px-4">
                {formFields.clientDetails.map((formField) => (
                    <FormField
                        control={form.control}
                        name={formField.name as keyof FormValues}
                        render={({ field }) => {
                            return (
                                <FormFieldComponent
                                    {...formField}
                                    field={field}
                                />
                            );
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

function PolicyDetailsFormField({ form }: any) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-center mb-4">
                Policy Details
            </h3>
            <div className="grid grid-cols-2 gap-6 px-4">
                {formFields.policyDetails.map((formField) => (
                    <FormField
                        control={form.control}
                        name={formField.name as keyof FormValues}
                        render={({ field }) => {
                            return (
                                <FormFieldComponent
                                    {...formField}
                                    field={field}
                                />
                            );
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

function CommissionFormField({ form }: any) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-center mb-4">
                Commission
            </h3>
            <div className="flex flex-col gap-6 px-4">
                {formFields.commission.map((formField) => (
                    <FormField
                        control={form.control}
                        name={formField.name as keyof FormValues}
                        render={({ field }) => {
                            return (
                                <FormFieldComponent
                                    {...formField}
                                    field={field}
                                />
                            );
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

function RemarksFormField({ form }: any) {
    return (
        <FormField
            control={form.control}
            name={formFields.remarks[0].name as keyof FormValues}
            render={({ field }) => {
                return (
                    <FormFieldComponent
                        {...formFields.remarks[0]}
                        field={field}
                    />
                );
            }}
        />
    );
}

export default NewPolicyForm;
