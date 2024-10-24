import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormField,
} from "./ui/form";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { formFields } from "@/config/formFields";
import FormFieldComponent from "./FormFieldComponent";

const formSchema = z.object({
    clientName: z.string().min(1, "Client name is required"),
    clientContact: z.string().min(1, "Client contact is required"),
    policyType: z.string().min(1, "Policy type is required"),
    companyName: z.string().min(1, "Company name is required"),
    policyNumber: z.string().min(1, "Policy number is required"),
    policyStatus: z.string().min(1, "Policy status is required"),
    sumInsured: z.string().min(1, "Sum insured is required"),
    startDate: z.date(),
    expiryDate: z.date(),
    commissionStatus: z.string().min(1, "Commission status is required"),
    commissionAmount: z.string().min(1, "Commission amount is required"),
    commissionRate: z.string().min(1, "Commission rate is required"),
    remarks: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function NewPolicyForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            clientName: "",
            clientContact: "",
            policyType: "",
            companyName: "",
            policyNumber: "",
            policyStatus: "",
            sumInsured: "",
            commissionStatus: "",
            commissionAmount: "",
            commissionRate: "",
            remarks: "",
        },
    });

    function onSubmit(data: FormValues) {
        console.log(data);
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <ScrollArea className="h-[calc(100vh-12rem)]">
                    <div className="grid grid-cols-2 gap-6 px-4">
                    {formFields.map((formField) => (
                        <FormField
                            control={form.control}
                            name={formField.name as keyof FormValues}

                            render={({ field }) => {
                                return (
                                    <FormFieldComponent {...formField} {...field} />
                                );
                            }}
                        />
                    ))}
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

export default NewPolicyForm;
