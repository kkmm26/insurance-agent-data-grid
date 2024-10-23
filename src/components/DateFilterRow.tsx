import { Button } from "./ui/button";
import DateRangePicker from "./DateRangePicker";
import { useContext } from "react";
import { PolicyStartDateContext } from "@/providers/PolicyStartDateProvider";



function DateFilterRow() {
    const {toCurrentMonth, toCurrentYear} = useContext(PolicyStartDateContext);
    

    
    return (
        <div className="flex justify-between items-center mb-4">
            <DateRangePicker />
            <div className="space-x-2">
                <Button onClick={() => {toCurrentYear()}} variant="outline">
                    This Year
                </Button>
                <Button onClick={() => {toCurrentMonth()}} variant="outline">
                    This Month
                </Button>
            </div>
        </div>
    );
}

export default DateFilterRow;
