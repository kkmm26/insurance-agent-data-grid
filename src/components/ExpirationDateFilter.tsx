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

const options = [
    {
        label: "Expired",
        value: "Expired",
    },
    {
        label: "7 days",
        value: "7 days",
    },
    {
        label: "1 month",
        value: "1 month",
    },
    {
        label: "All",
        value: "All",
    },
];

type ExpirationDateFilterProps<TData, TValue> = {
    column: Column<TData, TValue>;
};

function ExpirationDateFilter<TData, TValue>({
    column,
}: ExpirationDateFilterProps<TData, TValue>) {
    const [expirationDate, setExpirationDate] = useState<string>("All");

    const handleItemSelected = (option: string) => {
        setExpirationDate(option);
        column?.setFilterValue(option === "All" ? undefined : option);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">
                    <ChevronDown className="h-4 w-4" /> Expired Within:{" "}
                    {expirationDate === "Expired" && (
                        <span className="font-bold text-slate-500">
                            Expired
                        </span>
                    )}
                    {expirationDate === "7 days" && (
                        <span className="font-bold text-red-500">7 days</span>
                    )}
                    {expirationDate === "1 month" && (
                        <span className="font-bold text-green-500">
                            1 month
                        </span>
                    )}
                    {expirationDate === "All" && (
                        <span className="font-bold text-blue-500">All</span>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {options.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onSelect={() => handleItemSelected(option.value)}
                    >
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ExpirationDateFilter;
