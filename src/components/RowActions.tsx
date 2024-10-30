import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import NewPolicyForm from "./NewPolicyForm";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { policyApi } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

function RowActions({ row }: any) {
    return (
        <div className="flex gap-2">
            <EditDialog row={row} />
            <DeleteAction row={row} />
        </div>
    );
}

function EditDialog({ row }: any) {
    const [open, setOpen] = useState(false);

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} modal={true}>
            <DialogTrigger asChild>
                <span className="w-full cursor-pointer hover:underline hover:text-blue-500 px-2 py-1">
                    Edit
                </span>
            </DialogTrigger>
            <DialogContent
                onPointerDownOutside={(e) => e.preventDefault()}
                onInteractOutside={(e) => e.preventDefault()}
                className="min-w-[90%]"
            >
                <NewPolicyForm
                    closeDialog={closeDialog}
                    defaultValues={row.original}
                />
            </DialogContent>
        </Dialog>
    );
}

function DeleteAction({ row }: { row: any }) {
    const mutation = useMutation({
        mutationFn: async () => {
            await policyApi.deletePolicy(row.original.id);
        },
        onSuccess: () => {
            toast("Policy deleted successfully");
            location.reload();
        },
        onError: () => {
            toast("Something went wrong");
        },
    });

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <span className="w-full cursor-pointer hover:underline hover:text-red-500 px-2 py-1">
                    Delete
                </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => mutation.mutate()}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default RowActions;
