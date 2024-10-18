import { Button } from "./ui/button";
import DateRangePicker from "./DateRangePicker";

function DateFilterRow() {
    return (
        <div className="flex justify-between items-center mb-4">
            <DateRangePicker />
            <div className="space-x-2">
                <Button onClick={() => {}} variant="outline">
                    This Year
                </Button>
                <Button onClick={() => {}} variant="outline">
                    This Month
                </Button>
            </div>
        </div>
    );
}

export default DateFilterRow;
