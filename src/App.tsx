import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DateFilterRow from "./components/DateFilterRow";
import PolicyTable from "./components/PolicyTable";
import TotalCommision from "./components/TotalCommision";

import PolicyStartDateProvider from "./providers/PolicyStartDateProvider";
import { TableProvider } from "./providers/TableProvider";

import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import NewPolicyForm from "./components/NewPolicyForm";
import { Toaster } from "./components/ui/sonner";
import { useState } from "react";




export default function Dashboard() {
    const queryClient = new QueryClient();
    const [open, setOpen] = useState(false);

    function closeDialog() {
        setOpen(false);
    }
    return (
        <QueryClientProvider client={queryClient}>
            <TableProvider>
                <PolicyStartDateProvider>
                    <div className="container mx-auto p-4">
                        <div className="flex justify-between items-center mb-8">
                            <TotalCommision />

                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger asChild>
                                    <Button>Add New Policy</Button>
                                </DialogTrigger>
                                <DialogContent className="min-w-[90%]">
                                    <NewPolicyForm closeDialog={closeDialog} />
                                </DialogContent>
                            </Dialog>
                        </div>

                        <DateFilterRow />

                        <PolicyTable />
                    </div>
                </PolicyStartDateProvider>
            </TableProvider>
            <Toaster />
        </QueryClientProvider>
    );
}
