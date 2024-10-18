import {  SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FilterOptions from "./FilterOptions";
import ExpirationDateFilter from "./ExpirationDateFilter";
import ComissionStatusFilter from "./ComissionStatusFilter";
import PolicyStatusFilter from "./PolicyStatusFilter";
import ColumnsFilter from "./ColumnsFilter";

function FilterControlsRow() {
    return (
        <div className="flex justify-between mb-6">
            <div className="flex space-x-2">
                <Input placeholder="Search Client Names"/>
                <FilterOptions />
                <PolicyStatusFilter />
                <ExpirationDateFilter />
                <ComissionStatusFilter />
            </div>
            <ColumnsFilter />
        </div>
    );
}

export default FilterControlsRow;
