import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
} from "./ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { useState } from "react";

const comissionStatusOptions = ["All", "Pending", "Paid"];
function ComissionStatusFilter() {
    const [comissionStatus, setComissionStatus] = useState<string>("All");
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline">
                        <ChevronDown className="h-4 w-4" /> Comission Status:{" "}
                        {comissionStatus === "All" && <span className="font-bold text-blue-500">All</span>}
                        {comissionStatus === "Pending" && <span className="font-bold text-yellow-500">Pending</span>}
                        {comissionStatus === "Paid" && <span className="font-bold text-green-500">Paid</span>}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {comissionStatusOptions.map((option) => (
                        <DropdownMenuItem
                            key={option}
                            onClick={() => setComissionStatus(option)}
                        >
                            {option}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default ComissionStatusFilter;
