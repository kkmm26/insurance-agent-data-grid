import { Input } from "./ui/input";
import ExpirationDateFilter from "./ExpirationDateFilter";
import ComissionStatusFilter from "./CommissionStatusFilter";
import PolicyStatusFilter from "./PolicyStatusFilter";
import ColumnsVisibility from "./ColumnsVisibility";
import { Table } from "@tanstack/react-table";
import FacetedFilters from "./FacetedFilters";

function FilterControlsRow<TData>({ table }: { table: Table<TData> }) {
    return (
        <div className="flex justify-between mb-6 overflow-x-auto">
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
                    className="min-w-[200px]"
                />
                <FacetedFilters
                    columns={{
                        policyType: table.getColumn("policyType")!,
                        companyName: table.getColumn("companyName")!,
                    }}
                />
                <PolicyStatusFilter column={table.getColumn("policyStatus")!} />
                
                    <ExpirationDateFilter
                        column={table.getColumn("expiryDate")!}
                    />
                <ComissionStatusFilter
                    column={table.getColumn("commissionStatus")!}
                />
            </div>
            <ColumnsVisibility table={table} />
        </div>
    );
}

export default FilterControlsRow;
