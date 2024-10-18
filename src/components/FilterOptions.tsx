import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Filter } from "lucide-react";




const filterOptions = {
    policyType: ["Car", "Fire", "Health"],
    companyName: ["AYA SOMPO", "GGI", "YOUNG", "IKBZ", "FNI"],
};

type FilterCategory = "policyType" | "companyName";

type FilterState = Record<FilterCategory, Record<string, boolean>>;



export default function FilterComponent() {
    const [filters, setFilters] = useState<FilterState>({
        policyType: {},
        companyName: {},
    });

    const handleCheckboxChange = (
        category: FilterCategory,
        option: string
    ) => {
        setFilters((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [option]: !prev[category][option],
            },
        }));
    };

    const resetFilters = () => {
        setFilters({
            policyType: {},
            companyName: {},
        });
    };



    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="grid grid-cols-2 gap-4 p-2">
                    <div>
                        <h3 className="mb-2 font-semibold">Type</h3>
                        <ScrollArea className="h-[180px] w-[120px] pt-2 border-r-[1px]">
                            {filterOptions.policyType.map((option) => (
                                <div
                                    key={option}
                                    className="flex items-center space-x-2 mb-2"
                                >
                                    <Checkbox
                                        id={`policyType-${option}`}
                                        checked={filters.policyType[option] || false}
                                        onCheckedChange={() =>
                                            handleCheckboxChange("policyType", option)
                                        }
                                    />
                                    <label
                                        htmlFor={`policyType-${option}`}
                                        className="text-sm font-medium"
                                    >
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Company Name</h3>
                        <ScrollArea className="h-[180px] w-[120px] pt-2">
                            {filterOptions.companyName.map((option) => (
                                <div
                                    key={option}
                                    className="flex items-center space-x-2 mb-2"
                                >
                                    <Checkbox
                                        id={`company-${option}`}
                                        checked={
                                            filters.companyName[option] || false
                                        }
                                        onCheckedChange={() =>
                                            handleCheckboxChange(
                                                "companyName",
                                                option
                                            )
                                        }
                                    />
                                    <label
                                        htmlFor={`company-${option}`}
                                        className="text-sm font-medium"
                                    >
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-2 border-t">
                    <Button variant="outline" onClick={resetFilters}>
                        Reset All
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
