import { createContext, useState, useMemo } from "react";


interface DateContextType {
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
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
}

const initialDateContext: DateContextType = {
  startMonth: "Jan",
  startYear: "2023",
  endMonth: "Oct",
  endYear: "2024",
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
};

export const DateContext = createContext<DateContextType>(initialDateContext);

function DateProvider({children}: {children: React.ReactNode}) {

        const [startMonth, setStartMonth] = useState("Jan");
        const [startYear, setStartYear] = useState("2023");
        const [endMonth, setEndMonth] = useState("Oct");
        const [endYear, setEndYear] = useState("2024");

        const decreaseStartMonth = () => {};
        const increaseStartMonth = () => {};
        const decreaseStartYear = () => {};
        const increaseStartYear = () => {};
        const decreaseEndMonth = () => {};
        const increaseEndMonth = () => {};
        const decreaseEndYear = () => {};
        const increaseEndYear = () => {};
        const toCurrentMonth = () => {};
        const toCurrentYear = () => {};

    const value = useMemo(() => ({ 
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
        toCurrentMonth,
        toCurrentYear,
    }), [startMonth, startYear, endMonth, endYear]);

    return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export default DateProvider;
