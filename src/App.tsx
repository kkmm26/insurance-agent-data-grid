import { Button } from "@/components/ui/button";

import DateFilterRow from "./components/DateFilterRow";
import PolicyTable from "./components/PolicyTable";
import TotalCommision from "./components/TotalCommision";

import PolicyStartDateProvider from "./providers/PolicyStartDateProvider";
import { TableProvider } from "./providers/TableProvider";

import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import NewPolicyForm from "./components/NewPolicyForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

export default function Dashboard() {


    return (
        <QueryClientProvider client={queryClient}>
           
                <PolicyStartDateProvider>
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center mb-8">
                        <TotalCommision />

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Add New Policy</Button>
                            </DialogTrigger>
                            <DialogContent className="min-w-[90%]">
                                <NewPolicyForm />
                            </DialogContent>
                        </Dialog>
                    </div>

                    <DateFilterRow />

                    <PolicyTable />
                </div>
                </PolicyStartDateProvider>
          
        </QueryClientProvider>
    );
}
