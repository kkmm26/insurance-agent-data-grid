import { ColumnDef } from "@tanstack/react-table";

import { Policy } from "../data";
import { calculateCommissionAmount, cn, formatCurrency } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
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
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Sum Insured
                    <ArrowUpDown className="w-4 h-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return (
                <div className="text-right">{formatCurrency(row.original.sumInsured)}</div>
            );
        },
    },
    {
        accessorKey: "expiryDate",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Expiry Date
                    <ArrowUpDown className="w-4 h-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <div className="text-right">{row.original.expiryDate}</div>;
        },
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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Commission Amount
                    <ArrowUpDown className="w-4 h-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const commissionAmount = calculateCommissionAmount(
                row.original.sumInsured
            );
            return (
                <div className="text-right">
                    {formatCurrency(commissionAmount)}
                </div>
            );
        },
    },
    {
        accessorKey: "commissionRate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Commission Rate
                    <ArrowUpDown className="w-4 h-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return (
                <div className="text-center">{`${row.original.commissionRate}%`}</div>
            );
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
