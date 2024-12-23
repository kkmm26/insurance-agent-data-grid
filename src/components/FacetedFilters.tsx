import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Filter } from "lucide-react";
import { policyTypes, companyNames } from "@/data"; // Import types from data.ts
import { Column } from "@tanstack/react-table";
import { useLanguage } from "@/providers/LanguageProvider";

const filterOptions = {
    policyType: policyTypes,
    companyName: companyNames,
};

type FilterCategory = "policyType" | "companyName";

type FacetedFiltersProps<TData, TValue> = {
    columns?: Record<FilterCategory, Column<TData, TValue>>;
};

function FacetedFilters<TData, TValue>({
    columns,
}: FacetedFiltersProps<TData, TValue>) {
    const [selectedValues, setSelectedValues] = useState({
        policyType: (columns?.policyType?.getFilterValue() as string[]) || [],
        companyName: (columns?.companyName?.getFilterValue() as string[]) || [],
    });

    function handleCheckboxChange(category: FilterCategory, option: string) {
        const newValues = {
            ...selectedValues,
            [category]: selectedValues[category].includes(option)
                ? selectedValues[category].filter((value) => value !== option)
                : [...selectedValues[category], option],
        };

        setSelectedValues(newValues);
        columns?.[category]?.setFilterValue(
            newValues[category].length ? newValues[category] : undefined
        );
    }

    const resetFilters = () => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            policyType: [],
            companyName: [],
        }));
    };
    const { translations } = useLanguage();
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    {translations['filter']}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="grid grid-cols-2 gap-4 p-2">
                    <div>
                        <h3 className="mb-2 font-semibold">{translations['policy-type']}</h3>
                        <ScrollArea className="h-[180px] w-[120px] pt-2 border-r-[1px]">
                            {filterOptions.policyType.map((option) => {
                                return (
                                    <div
                                        key={option}
                                        className="flex items-center space-x-2 mb-2"
                                    >
                                        <Checkbox
                                            id={`policyType-${option}`}
                                            checked={
                                                selectedValues.policyType.includes(
                                                    option
                                                ) || false
                                            }
                                            onCheckedChange={() =>
                                                handleCheckboxChange(
                                                    "policyType",
                                                    option
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor={`policyType-${option}`}
                                            className="text-sm font-medium"
                                        >
                                            {option}
                                        </label>
                                    </div>
                                );
                            })}
                        </ScrollArea>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">{translations['company-name']}</h3>
                        <ScrollArea className="h-[180px] w-[120px] pt-2">
                            {filterOptions.companyName.map((option) => (
                                <div
                                    key={option}
                                    className="flex items-center space-x-2 mb-2"
                                >
                                    <Checkbox
                                        id={`company-${option}`}
                                        checked={
                                            selectedValues.companyName.includes(
                                                option
                                            ) || false
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
                        {translations['reset-all']}
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default FacetedFilters;
