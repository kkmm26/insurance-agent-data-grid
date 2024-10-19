import { SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useState } from "react";



const initialColumns = [
    { label: "Client Name", value: "clientName", selected: true },
    { label: "Policy Number", value: "policyNumber", selected: true },
    { label: "Policy Status", value: "policyStatus", selected: true },
    { label: "Comission Status", value: "comissionStatus", selected: true },
    { label: "Expiration Date", value: "expirationDate", selected: true },
];

function ColumnsFilter() {
    const [columns, setColumns] = useState(initialColumns);

    const handleCheckboxChange = (value: string) => {
        setColumns(columns.map(column =>
            column.value === value ? { ...column, selected: !column.selected } : column
        ));
    };

    const handleSelectAll = () => {
        setColumns(columns.map(column => ({ ...column, selected: true })));
    };

    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline">
                    <SlidersHorizontal className="h-4 w-4" /> Columns
                </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-4 w-fit p-4">
                <div className="grid grid-cols-2 gap-2">

                {columns.map((column) => (
                    <div key={column.value} className="flex items-center space-x-2">
                        <Checkbox
                            id={column.value}
                            checked={column.selected}
                            onCheckedChange={() => handleCheckboxChange(column.value)}
                        />
                        <Label
                            htmlFor={column.value}
                            className="text-sm font-medium"
                        >
                            {column.label}
                        </Label>
                    </div>
                ))}
                </div>
                <div className="flex items-center justify-center pt-2 border-t">
                    <Button variant="outline" onClick={handleSelectAll}>Select All</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ColumnsFilter;
