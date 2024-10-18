import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

const options = [
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

function ExpirationDateFilter() {
    const [expirationDate, setExpirationDate] = useState<string | null>(null);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">
                    <ChevronDown className="h-4 w-4" /> Expired Within:{" "}
                    {expirationDate === "7 days" && <span className="font-bold text-red-500">7 days</span>}
                    {expirationDate === "1 month" && <span className="font-bold text-green-500">1 month</span>}
                    {expirationDate === "All" && <span className="font-bold text-blue-500">None</span>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {options.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onSelect={() => setExpirationDate(option.value)}
                    >
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ExpirationDateFilter;
