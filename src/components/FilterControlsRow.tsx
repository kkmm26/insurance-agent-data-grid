import { Input } from "./ui/input";
import ExpirationDateFilter from "./ExpirationDateFilter";
import ComissionStatusFilter from "./ComissionStatusFilter";
import PolicyStatusFilter from "./PolicyStatusFilter";
import ColumnsFilter from "./ColumnsFilter";
import { Table } from "@tanstack/react-table";
import FacetedFilters from "./FacetedFilters";

function FilterControlsRow<TData>({ table }: { table: Table<TData> }) {
    return (
        <div className="flex justify-between mb-6">
            <div className="flex space-x-2">
                <Input
                    placeholder="Search Client Names"
                    value={
                        (table
                            .getColumn("clientName")
                            ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(e) =>
                        table
                            .getColumn("clientName")
                            ?.setFilterValue(e.target.value)
                    }
                />
                <FacetedFilters
                    columns={{
                        policyType: table.getColumn("policyType")!,
                        companyName: table.getColumn("companyName")!,
                    }}
                />
                <PolicyStatusFilter />
                <ExpirationDateFilter />
                <ComissionStatusFilter />
            </div>
            <ColumnsFilter />
        </div>
    );
}

export default FilterControlsRow;
