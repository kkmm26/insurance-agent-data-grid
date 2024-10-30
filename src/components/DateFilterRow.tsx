import { Button } from "./ui/button";
import DateRangePicker from "./DateRangePicker";
import { useContext } from "react";
import { PolicyStartDateContext } from "@/providers/PolicyStartDateProvider";
import { useLanguage } from "@/providers/LanguageProvider";



function DateFilterRow() {
    const {toCurrentMonth, toCurrentYear} = useContext(PolicyStartDateContext);
    const { translations } = useLanguage();

    
    return (
        <div className="flex justify-between items-center mb-4 overflow-x-auto">
            <DateRangePicker />
            <div className="space-x-2 flex">
                <Button onClick={() => {toCurrentYear()}} variant="outline">
                    {translations['this-year']}
                </Button>
                <Button onClick={() => {toCurrentMonth()}} variant="outline">
                    {translations['this-month']}
                </Button>
            </div>
        </div>
    );
}

export default DateFilterRow;
