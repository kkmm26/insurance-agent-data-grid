import { useTable } from "@/providers/TableProvider";

function TotalCommision() {

    const {table} = useTable();
    const totalCommision = table.getFilteredRowModel().rows.reduce((acc, row) => acc + row.original.commissionAmount, 0);
    const formattedTotalCommision = totalCommision.toLocaleString("en-US", { style: "currency", currency: "MMK" });
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-500">Total Comission</h2>
            <p className="text-3xl font-semibold text-gray-500">{formattedTotalCommision}</p>
        </div>
    );
}

export default TotalCommision;
