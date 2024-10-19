import { ColumnDef } from "@tanstack/react-table";

import { Policy } from "../data";
import { calculateCommissionAmount, cn, formatCurrency } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "./ui/checkbox";


export const columns: ColumnDef<Policy>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "No",
    },
    {
        accessorKey: "clientName",
        header: "Client Name",
    },
    {
        accessorKey: "clientContact",
        header: "Client Contact",
    },
    {
        accessorKey: "policyType",
        header: "Policy Type",
    },
    {
        accessorKey: "companyName",
        header: "Company Name",
    },
    {
        accessorKey: "policyNumber",
        header: "Policy Number",
    },
    {
        accessorKey: "policyStatus",
        header: "Policy Status",
        cell: ({ row }) => {
            return (
                <div className="flex justify-center items-center">
                    <span
                        className={cn(
                            row.original.policyStatus === "Active"
                                ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                                : "bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium"
                        )}
                    >
                        {row.original.policyStatus}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "sumInsured",
        header: "Sum Insured",
        cell: ({ row }) => {
            return formatCurrency(row.original.sumInsured);
        },
    },
    {
        accessorKey: "expiryDate",
        header: "Expiry Date",
    },
    {
        accessorKey: "commissionStatus",
        header: "Commission Status",
        cell: ({ row }) => {
            return (
                <div className="flex justify-center items-center">
                    <span
                        className={cn(
                            row.original.commissionStatus === "Paid"
                                ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs "
                                : "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs "
                        )}
                    >
                        {row.original.commissionStatus}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "commissionAmount",
        header: "Commission Amount",
        cell: ({ row }) => {
            const commissionAmount = calculateCommissionAmount(
                row.original.sumInsured
            );
            return formatCurrency(commissionAmount);
        },
    },
    {
        accessorKey: "commissionRate",
        header: "Commission Rate",
        cell: ({ row }) => {
            return `${row.original.commissionRate}%`;
        },
    },
    {
        accessorKey: "remarks",
        header: "Remarks",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => {}}>
                            Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {}}>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {}}>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
