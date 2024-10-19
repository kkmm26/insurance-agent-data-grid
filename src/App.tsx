import { Button } from "@/components/ui/button";
import { columns } from "./components/columns";
import { policies } from "./data";
import DateFilterRow from "./components/DateFilterRow";
import FilterControlsRow from "./components/FilterControlsRow";
import PolicyTable from "./components/PolicyTable";
import TotalCommision from "./components/TotalCommision";
import DateProvider from "./providers/DateProvider";

export default function Dashboard() {
    return (
        <DateProvider>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-8">
                    <TotalCommision />
                    <Button>Add New Deal</Button>
                </div>

                <DateFilterRow />

                <FilterControlsRow />

                <PolicyTable columns={columns} data={policies} />
            </div>
        </DateProvider>
    );
}
