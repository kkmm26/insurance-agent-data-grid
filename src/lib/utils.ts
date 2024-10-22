import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "MMK" }).format(value);
}

export function calculateCommissionAmount(value: number) {
    return value * 0.1;
}

export function getCurrentYear() {
    return parseInt(format(new Date(), "yyyy"));
}

export function getCurrentMonth() {
    return format(new Date(), "MMM");
}

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export function nextMonth(month: string) {
    return MONTHS[(MONTHS.indexOf(month) + 1) % 12];
}

export function previousMonth(month: string) {
    return MONTHS[(MONTHS.indexOf(month) + 11) % 12];
}