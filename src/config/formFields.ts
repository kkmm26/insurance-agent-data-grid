import { policyTypes, companyNames, policyStatuses, commissionStatuses } from "@/data";

export const formFields = {
  clientDetails: [
    { name: "clientName", label: "Client Name", type: "input" },
    { name: "clientPhone", label: "Client Phone", type: "phone-input" },
    { name: "clientContact", label: "Client Contact", type: "textarea" },
  ],
  policyDetails: [
    { name: "policyType", label: "Policy Type", type: "select", options: policyTypes },
    { name: "companyName", label: "Company Name", type: "select", options: companyNames },
    { name: "policyNumber", label: "Policy Number", type: "input" },
    { name: "policyStatus", label: "Policy Status", type: "select", options: policyStatuses },
    { name: "sumInsured", label: "Sum Insured", type: "number-input" },
    { name: "premiumAmount", label: "Premium Amount", type: "number-input" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "expiryDate", label: "Expiry Date", type: "date" },
  ],
  commission: [
    { name: "commissionStatus", label: "Commission Status", type: "select", options: commissionStatuses },
    { name: "commissionAmount", label: "Commission Amount", type: "number-input" },
    { name: "commissionRate", label: "Commission Rate", type: "number-input" },
  ],
  remarks: [
    { name: "remarks", label: "Remarks", type: "textarea" },
  ],
};
