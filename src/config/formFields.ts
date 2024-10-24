import { policyTypes, companyNames, policyStatuses, commissionStatuses } from "@/data";

export const formFields = [
  { name: "clientName", label: "Client Name", type: "input" },
  { name: "clientContact", label: "Client Contact", type: "input" },
  { name: "policyType", label: "Policy Type", type: "select", options: policyTypes },
  { name: "companyName", label: "Company Name", type: "select", options: companyNames },
  { name: "policyNumber", label: "Policy Number", type: "input" },
  { name: "policyStatus", label: "Policy Status", type: "select", options: policyStatuses },
  { name: "sumInsured", label: "Sum Insured", type: "input" },
  { name: "startDate", label: "Start Date", type: "date" },
  { name: "expiryDate", label: "Expiry Date", type: "date" },
  { name: "commissionStatus", label: "Commission Status", type: "select", options: commissionStatuses },
  { name: "commissionAmount", label: "Commission Amount", type: "input" },
  { name: "commissionRate", label: "Commission Rate", type: "input" },
  { name: "remarks", label: "Remarks", type: "textarea" },
];
