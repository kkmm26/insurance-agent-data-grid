import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
import { MONTHS } from "@/lib/utils";

interface DatePickerProps {
    value: string | number;
    onDecrease: () => void;
    onIncrease: () => void;
    variant: "month" | "year";
    startOrEnd: "start" | "end";
    onSelectMonth: (month: string, startOrEnd: "start" | "end") => void;
    onSelectYear: (year: number, startOrEnd: "start" | "end") => void;
}

const YEAR_RANGE = Array.from({ length: 10 }, (_, index) =>  2024 - index);

function DatePicker({
    value,
    onDecrease,
    onIncrease,
    variant,
    startOrEnd,
    onSelectMonth,
    onSelectYear,
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => onDecrease()}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <span className="font-bold text-lg">
                            {variant === "month" &&
                                value.toString().slice(0, 3)}
                            {variant === "year" && value}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-max p-0">
                    <Command>
                        <CommandList>
                            <CommandGroup>
                                {variant === "month" &&
                                    MONTHS.map((month, index) => (
                                        <CommandItem
                                            onSelect={() => {
                                                onSelectMonth(month, startOrEnd);
                                                setIsOpen(false);
                                            }}
                                            className="px-4"
                                            key={index}
                                            value={month}

                                        >
                                            {month}
                                        </CommandItem>
                                    ))}
                                {variant === "year" &&
                                    YEAR_RANGE.map((year, index) => (
                                        <CommandItem
                                            onSelect={() => {
                                                onSelectYear(year, startOrEnd);
                                                setIsOpen(false);
                                            }}
                                            key={index}
                                            value={`${year}`}
                                            className="px-4"
                                        >
                                            {year}
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <Button variant="ghost" size="icon" onClick={() => onIncrease()}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default DatePicker;
