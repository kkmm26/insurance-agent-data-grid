import DatePicker from "./ui/DatePicker";
import { useContext } from "react";
import { PolicyStartDateContext } from "../providers/PolicyStartDateProvider";

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
        onSelectMonth,
        onSelectYear,
    } = useContext(PolicyStartDateContext);

    return (
        <div className="flex items-center">
            <DatePicker
                variant="month"
                value={startMonth}
                startOrEnd="start"
                onSelectMonth={onSelectMonth}
                onSelectYear={onSelectYear}
                onDecrease={decreaseStartMonth}
                onIncrease={increaseStartMonth}
            />
            <DatePicker
                variant="year"
                value={startYear}
                startOrEnd="start"
                onSelectMonth={onSelectMonth}
                onSelectYear={onSelectYear}
                onDecrease={decreaseStartYear}
                onIncrease={increaseStartYear}
            />
            <span className="text-sm text-gray-500 mx-2">to</span>
            <DatePicker
                variant="month"
                value={endMonth}
                startOrEnd="end"
                onSelectMonth={onSelectMonth}
                onSelectYear={onSelectYear}
                onDecrease={decreaseEndMonth}
                onIncrease={increaseEndMonth}
            />
            <DatePicker
                variant="year"
                value={endYear}
                startOrEnd="end"
                onSelectMonth={onSelectMonth}
                onSelectYear={onSelectYear}
                onDecrease={decreaseEndYear}
                onIncrease={increaseEndYear}
            />
        </div>
    );
}

export default DateRangePicker;
