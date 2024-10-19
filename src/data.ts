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
        expiryDate: "2025-05-15",
        commissionStatus: "Pending",
        commissionAmount: 1000,
        commissionRate: 10,
    },
    {
        id: 2,
        clientName: "Jane Smith",
        clientContact: "09123456789",
        policyType: "Health",
        companyName: "GGI",
        policyNumber: "9876543210",
        policyStatus: "Expired",
        sumInsured: 50000,
        startDate: "2022-03-10",
        expiryDate: "2023-03-10",
        commissionStatus: "Paid",
        commissionAmount: 500,
        commissionRate: 5,
    },
    {
        id: 3,
        clientName: "Alice Johnson",
        clientContact: "08098765432",
        policyType: "Life",
        companyName: "YOUNG",
        policyNumber: "2468135790",
        policyStatus: "Active",
        sumInsured: 100000,
        startDate: "2023-01-20",
        expiryDate: "2024-01-20",
        commissionStatus: "Pending",
        commissionAmount: 2000,
        commissionRate: 2,
    },
    {
        id: 4,
        clientName: "Bob Williams",
        clientContact: "08123456700",
        policyType: "Fire",
        companyName: "IKBZ",
        policyNumber: "1357908642",
        policyStatus: "Active",
        sumInsured: 75000,
        startDate: "2023-07-01",
        expiryDate: "2024-07-01",
        commissionStatus: "Paid",
        commissionAmount: 1500,
        commissionRate: 2,
    },
    {
        id: 5,
        clientName: "Charlie Brown",
        clientContact: "08012345678",
        policyType: "Travel",
        companyName: "AYA SOMPO",
        policyNumber: "1122334455",
        policyStatus: "Expired",
        sumInsured: 15000,
        startDate: "2022-09-12",
        expiryDate: "2023-09-12",
        commissionStatus: "Paid",
        commissionAmount: 750,
        commissionRate: 5,
    },
    {
        id: 6,
        clientName: "David Wilson",
        clientContact: "08223456712",
        policyType: "Motor",
        companyName: "FNI",
        policyNumber: "3344556677",
        policyStatus: "Active",
        sumInsured: 25000,
        startDate: "2024-02-14",
        expiryDate: "2025-02-14",
        commissionStatus: "Pending",
        commissionAmount: 1250,
        commissionRate: 5,
    },
    {
        id: 7,
        clientName: "Emily Davis",
        clientContact: "08456789123",
        policyType: "Life",
        companyName: "GGI",
        policyNumber: "9988776655",
        policyStatus: "Active",
        sumInsured: 80000,
        startDate: "2023-06-21",
        expiryDate: "2024-06-21",
        commissionStatus: "Paid",
        commissionAmount: 1600,
        commissionRate: 2,
    },
    {
        id: 8,
        clientName: "Frank Thompson",
        clientContact: "08091234567",
        policyType: "Fire",
        companyName: "YOUNG",
        policyNumber: "2244668800",
        policyStatus: "Expired",
        sumInsured: 90000,
        startDate: "2022-08-30",
        expiryDate: "2023-08-30",
        commissionStatus: "Paid",
        commissionAmount: 1800,
        commissionRate: 2,
    },
    {
        id: 9,
        clientName: "Grace Lee",
        clientContact: "08623456790",
        policyType: "Health",
        companyName: "AYA SOMPO",
        policyNumber: "6677889900",
        policyStatus: "Active",
        sumInsured: 60000,
        startDate: "2023-11-15",
        expiryDate: "2024-11-15",
        commissionStatus: "Pending",
        commissionAmount: 1200,
        commissionRate: 2,
    },
    {
        id: 10,
        clientName: "Henry Walker",
        clientContact: "08765432198",
        policyType: "Travel",
        companyName: "IKBZ",
        policyNumber: "5566778899",
        policyStatus: "Active",
        sumInsured: 30000,
        startDate: "2024-01-11",
        expiryDate: "2025-01-11",
        commissionStatus: "Pending",
        commissionAmount: 1500,
        commissionRate: 5,
    },
    {
        id: 11,
        clientName: "Ivy Evans",
        clientContact: "08887654321",
        policyType: "Motor",
        companyName: "GGI",
        policyNumber: "4433221100",
        policyStatus: "Expired",
        sumInsured: 18000,
        startDate: "2022-11-05",
        expiryDate: "2023-11-05",
        commissionStatus: "Paid",
        commissionAmount: 900,
        commissionRate: 5,
    },
    {
        id: 12,
        clientName: "Jack Harris",
        clientContact: "08323456789",
        policyType: "Fire",
        companyName: "FNI",
        policyNumber: "1011121314",
        policyStatus: "Active",
        sumInsured: 100000,
        startDate: "2023-09-01",
        expiryDate: "2024-09-01",
        commissionStatus: "Pending",
        commissionAmount: 2000,
        commissionRate: 2,
    },
    {
        id: 13,
        clientName: "Karen Garcia",
        clientContact: "08543219876",
        policyType: "Life",
        companyName: "AYA SOMPO",
        policyNumber: "2233445566",
        policyStatus: "Expired",
        sumInsured: 120000,
        startDate: "2021-12-31",
        expiryDate: "2023-12-31",
        commissionStatus: "Paid",
        commissionAmount: 2400,
        commissionRate: 2,
    },
    {
        id: 14,
        clientName: "Larry Martinez",
        clientContact: "08901234567",
        policyType: "Health",
        companyName: "IKBZ",
        policyNumber: "8899007766",
        policyStatus: "Active",
        sumInsured: 70000,
        startDate: "2023-10-10",
        expiryDate: "2024-10-10",
        commissionStatus: "Pending",
        commissionAmount: 1400,
        commissionRate: 2,
    },
    {
        id: 15,
        clientName: "Megan Anderson",
        clientContact: "08345678912",
        policyType: "Travel",
        companyName: "YOUNG",
        policyNumber: "9988776655",
        policyStatus: "Active",
        sumInsured: 25000,
        startDate: "2023-12-12",
        expiryDate: "2024-12-12",
        commissionStatus: "Paid",
        commissionAmount: 1250,
        commissionRate: 5,
    },
];
