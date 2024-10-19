import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
    value: string | number;
    onDecrease: () => void;
    onIncrease: () => void;
}

function DatePicker({ value, onDecrease, onIncrease }: DatePickerProps) {
    return (
        <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => onDecrease()}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold min-w-14 max-w-14 text-center">{value}</span>
            <Button variant="ghost" size="icon" onClick={() => onIncrease()}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default DatePicker;
