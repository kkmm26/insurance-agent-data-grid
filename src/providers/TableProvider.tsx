import { createContext, useState, useContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    ColumnFiltersState,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { columns } from "../components/Columns";
import { Policy } from '@/data';
import { policyApi } from "@/services/api";

interface TableContextType {
    table: ReturnType<typeof useReactTable<Policy>>;
}

export const TableContext = createContext<TableContextType | undefined>(undefined);

export function TableProvider({ children }: { children: ReactNode }) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState({});

    const { data: policies = [] } = useQuery({
        queryKey: ["policies"],
        queryFn: () => {
            return policyApi.getPolicies();
        },
    });

    const table = useReactTable({
        columns,
        data: policies,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
    });

    return (
        <TableContext.Provider value={{ table }}>
            {children}
        </TableContext.Provider>
    );
}

export const useTable = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTable must be used within a TableProvider");
    }
    return context;
};

