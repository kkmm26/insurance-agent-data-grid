import { createContext, useReducer, useMemo } from "react";
import { getCurrentMonth, getCurrentYear, nextMonth, previousMonth } from "@/lib/utils";

interface DateState {
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear: number;
}

interface DateContextType extends DateState {
    decreaseStartMonth: () => void;
    increaseStartMonth: () => void;
    decreaseStartYear: () => void;
    increaseStartYear: () => void;
    decreaseEndMonth: () => void;
    increaseEndMonth: () => void;
    decreaseEndYear: () => void;
    increaseEndYear: () => void;
    toCurrentMonth: () => void;
    toCurrentYear: () => void;
    onSelectMonth: (month: string, startOrEnd: "start" | "end") => void;
    onSelectYear: (year: number, startOrEnd: "start" | "end") => void;
}


const initialState: DateState = {
    startMonth: getCurrentMonth(),
    startYear: getCurrentYear(),
    endMonth: getCurrentMonth(),
    endYear: getCurrentYear(),
};

function dateReducer(
    state: DateState,
    action: {
        type: string;
        startOrEnd?: "start" | "end";
        value?: string | number;
    }
) {
    const { startMonth, startYear, endMonth, endYear } = state;

    switch (action.type) {
        case "INCREASE_START_MONTH":
            return {
                ...state,
                startMonth: nextMonth(startMonth),
            };
        case "DECREASE_START_MONTH":
            return {
                ...state,
                startMonth: previousMonth(startMonth),
            };
        case "INCREASE_END_MONTH":
            return {
                ...state,
                endMonth: nextMonth(endMonth),
            };
        case "DECREASE_END_MONTH":
            return {
                ...state,
                endMonth: previousMonth(endMonth),
            };
        case "INCREASE_START_YEAR":
            return {
                ...state,
                startYear: startYear + 1,
            };
        case "DECREASE_START_YEAR":
            return {
                ...state,
                startYear: startYear - 1,
            };
        case "INCREASE_END_YEAR":
            return {
                ...state,
                endYear: endYear + 1,
            };
        case "DECREASE_END_YEAR":
            return {
                ...state,
                endYear: endYear - 1,
            };
        case "TO_CURRENT_MONTH":
            return {
                ...state,
                startMonth: getCurrentMonth(),
                endMonth: getCurrentMonth(),
            };
        case "TO_CURRENT_YEAR":
            return {
                ...state,
                startYear: getCurrentYear(),
                endYear: getCurrentYear(),
            };
        case "SELECT_MONTH":
            return {
                ...state,
                [action.startOrEnd === "start" ? "startMonth" : "endMonth"]:
                    action.value,
            };
        case "SELECT_YEAR":
            return {
                ...state,
                [action.startOrEnd === "start" ? "startYear" : "endYear"]:
                    action.value,
            };
        default:
            return state;
    }
}

export const DateContext = createContext<DateContextType>({
    ...initialState,
    decreaseStartMonth: () => {},
    increaseStartMonth: () => {},
    decreaseStartYear: () => {},
    increaseStartYear: () => {},
    decreaseEndMonth: () => {},
    increaseEndMonth: () => {},
    decreaseEndYear: () => {},
    increaseEndYear: () => {},
    toCurrentMonth: () => {},
    toCurrentYear: () => {},
    onSelectMonth: () => {},
    onSelectYear: () => {},
});

function DateProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(dateReducer, initialState);

    const decreaseStartMonth = () => dispatch({ type: "DECREASE_START_MONTH" });
    const increaseStartMonth = () => dispatch({ type: "INCREASE_START_MONTH" });
    const decreaseStartYear = () => dispatch({ type: "DECREASE_START_YEAR" });
    const increaseStartYear = () => dispatch({ type: "INCREASE_START_YEAR" });
    const decreaseEndMonth = () => dispatch({ type: "DECREASE_END_MONTH" });
    const increaseEndMonth = () => dispatch({ type: "INCREASE_END_MONTH" });
    const decreaseEndYear = () => dispatch({ type: "DECREASE_END_YEAR" });
    const increaseEndYear = () => dispatch({ type: "INCREASE_END_YEAR" });
    const toCurrentMonth = () => dispatch({ type: "TO_CURRENT_MONTH" });
    const toCurrentYear = () => dispatch({ type: "TO_CURRENT_YEAR" });

    const onSelectMonth = (month: string, startOrEnd: "start" | "end") => {
        dispatch({ type: `SELECT_MONTH`, value: month, startOrEnd });
    };
    const onSelectYear = (year: number, startOrEnd: "start" | "end") => {
        dispatch({ type: `SELECT_YEAR`, value: year, startOrEnd });
    };
    const value = useMemo(
        () => ({
            ...state,
            decreaseStartMonth,
            increaseStartMonth,
            decreaseStartYear,
            increaseStartYear,
            decreaseEndMonth,
            increaseEndMonth,
            decreaseEndYear,
            increaseEndYear,
            toCurrentMonth,
            toCurrentYear,
            onSelectMonth,
            onSelectYear,
        }),
        [state]
    );

    return (
        <DateContext.Provider value={value}>{children}</DateContext.Provider>
    );
}

export default DateProvider;
