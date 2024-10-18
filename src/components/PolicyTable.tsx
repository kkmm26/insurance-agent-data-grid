import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
} from "./ui/table";
import { policies } from "../data";
import { Button } from "./ui/button";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from "./ui/pagination";

function PolicyTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(policies.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPolicies = policies.slice(startIndex, endIndex);

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Insurance Company</TableHead>
                        <TableHead>Policy Number</TableHead>
                        <TableHead>Policy Status</TableHead>
                        <TableHead>Sum Insured</TableHead>
                        <TableHead>Expiry Date</TableHead>
                        <TableHead>Comission Status</TableHead>
                        <TableHead>Commision</TableHead>
                        <TableHead>Remarks</TableHead>
                        <TableHead>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentPolicies.map((policy) => (
                        <TableRow key={policy.id}>
                            <TableCell>{policy.id}</TableCell>
                            <TableCell>{policy.clientName}</TableCell>
                            <TableCell>{policy.type}</TableCell>
                            <TableCell>{policy.insuranceCompany}</TableCell>
                            <TableCell>{policy.policyNumber}</TableCell>
                            <TableCell>
                                {policy.policyStatus && (
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${
                                            policy.policyStatus === "Expired"
                                                ? "bg-red-100 text-red-800"
                                                : policy.policyStatus ===
                                                  "Pending"
                                                ? "bg-blue-100 text-blue-800"
                                                : ""
                                        }`}
                                    >
                                        {policy.policyStatus}
                                    </span>
                                )}
                            </TableCell>
                            <TableCell>{policy.sumInsured}</TableCell>
                            <TableCell>{policy.expiryDate}</TableCell>
                            <TableCell>
                                {policy.commissionStatus && (
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${
                                            policy.commissionStatus ===
                                            "Recieved"
                                                ? "bg-green-100 text-green-800"
                                                : policy.commissionStatus ===
                                                  "Pending"
                                                ? "bg-blue-100 text-blue-800"
                                                : ""
                                        }`}
                                    >
                                        {policy.commissionStatus}
                                    </span>
                                )}
                            </TableCell>
                            <TableCell>{policy.commission}</TableCell>
                            <TableCell>{policy.remarks}</TableCell>
                            <TableCell>
                                <Button variant="link">View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}

export default PolicyTable;
