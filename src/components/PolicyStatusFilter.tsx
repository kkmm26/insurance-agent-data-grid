
import { ChevronDown } from "lucide-react"

import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useState } from "react";

const policyStatusOptions = ["Active", "Expired", "All"]

function PolicyStatusFilter() {
    const [policyStatus, setPolicyStatus] = useState<string>("All")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline">
                    <ChevronDown className="h-4 w-4" /> Policy Status:
                    {policyStatus === "Active" && <span className="font-bold text-green-500">Active</span>}
                    {policyStatus === "Expired" && <span className="font-bold text-red-500">Expired</span>}
                    {policyStatus === "All" && <span className="font-bold text-blue-500">All</span>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {policyStatusOptions.map((option) => (
                    <DropdownMenuItem key={option} onClick={() => setPolicyStatus(option)}>
                        {option}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default PolicyStatusFilter;  