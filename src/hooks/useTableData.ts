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
import { Policy } from "../data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export function useTableData() {
    const query = useQuery({
        queryKey: ["policies"],
        queryFn: async () => {
            const response = await axios.get(
                "https://insurance-data-grid.onrender.com/api/policies"
            );
            return response.data;
        },
        initialData: [],
    });

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState({});

    const table = useReactTable({
        columns,
        data: query.data,
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

    return { table };
}
