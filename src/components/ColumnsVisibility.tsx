import { SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Table } from "@tanstack/react-table";
import { COLUMNS } from "@/data";
import { useLanguage } from "@/providers/LanguageProvider";

type ColumnsVisibilityProps<TData> = {
    table: Table<TData>;
};

function ColumnsVisibility<TData>({ table }: ColumnsVisibilityProps<TData>) {
    const { translations } = useLanguage();
    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline">
                    <SlidersHorizontal className="h-4 w-4" /> {translations['columns']}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-4 w-fit p-4">
                <div className="grid grid-cols-2 gap-2">
                    {table
                        .getAllColumns()
                        .filter(
                            (column) =>
                                column.getCanHide()
                        )
                        .map((column) => (
                            <div
                                key={column.id}
                            className="flex items-center space-x-2"
                        >
                            <Checkbox
                                id={column.id}
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                }
                            />
                            <Label htmlFor={column.id}>
                                {COLUMNS[column.id as keyof typeof COLUMNS]}
                            </Label>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center pt-2 border-t">
                    <Button
                        variant="outline"
                        onClick={() => table.toggleAllColumnsVisible()}
                    >
                        Select All
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ColumnsVisibility;
