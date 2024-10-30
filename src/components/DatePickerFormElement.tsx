import { format } from "date-fns";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";

function DatePickerFormElement({ ...field }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start",
                        !field.value && "text-muted-foreground",
                    )}
                >
                    {field.value ? (
                        format(new Date(field.value), "PPP")
                    ) : (
                        <span>Pick a date</span>
                    )}
                            <CalendarIcon />
                
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={field.onChange}
                />
            </PopoverContent>
        </Popover>
    );
}

export default DatePickerFormElement;
