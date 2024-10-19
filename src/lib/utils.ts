import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "MMK" }).format(value);
}

export function calculateCommissionAmount(value: number) {
    return value * 0.1;
}
