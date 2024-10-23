import { Button } from "@/components/ui/button";

import DateFilterRow from "./components/DateFilterRow";
import PolicyTable from "./components/PolicyTable";
import TotalCommision from "./components/TotalCommision";

import PolicyStartDateProvider from "./providers/PolicyStartDateProvider";
import { TableProvider } from "./providers/TableProvider";

export default function Dashboard() {
    return (
        <TableProvider>
            <PolicyStartDateProvider>
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center mb-8">
                        <TotalCommision />
                        <Button>Add New Deal</Button>
                    </div>

                    <DateFilterRow />

                    <PolicyTable />
                </div>
            </PolicyStartDateProvider>
        </TableProvider>
    );
}
