import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
} from "./ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { useState } from "react";
import { Column } from "@tanstack/react-table";
import { useLanguage } from "@/providers/LanguageProvider";

const commissionStatusOptions = ["Pending", "Paid", "All"];

type ComissionStatusFilterProps<TData, TValue> = {
    column: Column<TData, TValue>;
};

function CommissionStatusFilter<TData, TValue>({
    column,
}: ComissionStatusFilterProps<TData, TValue>) {
    const [commissionStatus, setCommissionStatus] = useState<string>("All");

    const handleItemClicked = (option: string) => {
        setCommissionStatus(option);
        column?.setFilterValue(option === "All" ? undefined : option);
    };
    const { translations } = useLanguage();
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline">
                        <ChevronDown className="h-4 w-4" /> {translations['commission-status']}:{" "}
                        {commissionStatus === "All" && (
                            <span className="font-bold text-blue-500">All</span>
                        )}
                        {commissionStatus === "Pending" && (
                            <span className="font-bold text-yellow-500">
                                Pending
                            </span>
                        )}
                        {commissionStatus === "Paid" && (
                            <span className="font-bold text-green-500">
                                Paid
                            </span>
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {commissionStatusOptions.map((option) => (
                        <DropdownMenuItem
                            key={option}
                            onClick={() => handleItemClicked(option)}
                        >
                            {option}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default CommissionStatusFilter;
