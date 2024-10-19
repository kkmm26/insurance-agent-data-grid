export type PolicyType = "Motor" | "Fire" | "Life" | "Health" | "Travel";
export type PolicyStatus = "Active" | "Expired";
export type CommissionStatus = "Pending" | "Paid";
export type CompanyName = "AYA SOMPO" | "GGI" | "YOUNG" | "IKBZ" | "FNI";
export type Policy = {
  id: number;
  clientName: string;
  clientContact: string;
  policyType: PolicyType;
  companyName: CompanyName;
  policyNumber: string;
  policyStatus: PolicyStatus;
  sumInsured: number;
  startDate: string;
  expiryDate: string;
  commissionStatus: CommissionStatus;
  commissionAmount: number;
  commissionRate: number;
  remarks?: string;
}

export const policyTypes: PolicyType[] = ["Motor", "Fire", "Life", "Health", "Travel"];
export const policyStatuses: PolicyStatus[] = ["Active", "Expired"];
export const commissionStatuses: CommissionStatus[] = ["Pending", "Paid"];
export const companyNames: CompanyName[] = ["AYA SOMPO", "GGI", "YOUNG", "IKBZ", "FNI"];

export const policies: Policy[] = [
    {
        id: 1,
        clientName: "John Doe",
        clientContact: "08123456789",
        policyType: "Motor",
        companyName: "AYA SOMPO",
        policyNumber: "1234567890",
        policyStatus: "Active",
        sumInsured: 20000,
        startDate: "2024-05-15",
        expiryDate: "2024-05-15",
        commissionStatus: "Pending",
        commissionAmount: 1000,
        commissionRate: 10,
    },
    {
        id: 2,
        clientName: "Jane Doe",
        clientContact: "08123456789",
        policyType: "Motor",
        companyName: "IKBZ",
        policyNumber: "1234567890",
        policyStatus: "Expired",
        sumInsured: 20000,
        startDate: "2024-05-15",
        expiryDate: "2024-05-15",
        commissionStatus: "Paid",
        commissionAmount: 1000,
        commissionRate: 10,
    },
    {
        id: 3,
        clientName: "John Doe",
        clientContact: "08123456789",
        policyType: "Motor",
        companyName: "YOUNG",
        policyNumber: "1234567890",
        policyStatus: "Active",
        sumInsured: 20000,
        startDate: "2024-05-15",
        expiryDate: "2024-05-15",
        commissionStatus: "Paid",
        commissionAmount: 1000,
        commissionRate: 10,
    },
];
