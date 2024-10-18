import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
    value: string;
    onDecrease: () => void;
    onIncrease: () => void;
}

function DatePicker({ value, onDecrease, onIncrease }: DatePickerProps) {
    return (
        <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => onDecrease()}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xl font-bold">{value}</span>
            <Button variant="ghost" size="icon" onClick={() => onIncrease()}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default DatePicker;
