import DatePicker from "./ui/DatePicker";
import { useContext } from "react";
import { DateContext } from "../providers/DateProvider";

function DateRangePicker() {
    const {
        startMonth,
        startYear,
        endMonth,
        endYear,
        decreaseStartMonth,
        increaseStartMonth,
        decreaseStartYear,
        increaseStartYear,
        decreaseEndMonth,
        increaseEndMonth,
        decreaseEndYear,
        increaseEndYear,
    } = useContext(DateContext);

    return (
        <div className="flex items-center">
            <DatePicker
                value={startMonth}
                onDecrease={decreaseStartMonth}
                onIncrease={increaseStartMonth}
            />
            <DatePicker
                value={startYear}
                onDecrease={decreaseStartYear}
                onIncrease={increaseStartYear}
            />
            <span className="text-sm text-gray-500 mx-2">to</span>
            <DatePicker
                value={endMonth}
                onDecrease={decreaseEndMonth}
                onIncrease={increaseEndMonth}
            />
            <DatePicker
                value={endYear}
                onDecrease={decreaseEndYear}
                onIncrease={increaseEndYear}
            />
        </div>
    );
}

export default DateRangePicker;
