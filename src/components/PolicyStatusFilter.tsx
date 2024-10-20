import { ChevronDown } from "lucide-react";

import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";
import { Column } from "@tanstack/react-table";

const policyStatusOptions = ["Active", "Expired", "All"];

type PolicyStatusFilterProps<TData, TValue> = {
    column?: Column<TData, TValue>;
};

function PolicyStatusFilter<TData, TValue>({
    column,
}: PolicyStatusFilterProps<TData, TValue>) {
    const [policyStatus, setPolicyStatus] = useState<string>("All");

    const handleItemClicked = (option: string) => {
        setPolicyStatus(option);
        column?.setFilterValue(option === "All" ? undefined : option);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">
                    <ChevronDown className="h-4 w-4" /> Policy Status:
                    {policyStatus === "Active" && (
                        <span className="font-bold text-green-500">Active</span>
                    )}
                    {policyStatus === "Expired" && (
                        <span className="font-bold text-slate-500">
                            Expired
                        </span>
                    )}
                    {policyStatus === "All" && (
                        <span className="font-bold text-blue-500">All</span>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {policyStatusOptions.map((option) => (
                    <DropdownMenuItem
                        key={option}
                        onClick={() => handleItemClicked(option)}
                    >
                        {option}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default PolicyStatusFilter;
