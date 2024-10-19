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
    return new Date().getFullYear();
}

export function getCurrentMonth() {
    return format(new Date(), "MMM");
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function nextMonth(month: string) {
    return months[(months.indexOf(month) + 1) % 12];
}

export function previousMonth(month: string) {
    return months[(months.indexOf(month) + 11) % 12];
}