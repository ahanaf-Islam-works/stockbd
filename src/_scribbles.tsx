"use client";
import { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";
import Link from "next/link";
import { buttonVariants } from "./components/ui/button";

const salesPeople = [
  {
    name: "APLS",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "↑",
    deltaType: "moderateIncrease",
  },
  {
    name: "TBDSA",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "-",
    deltaType: "unchanged",
  },
  {
    name: "GOOG",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "↓",
    deltaType: "moderateDecrease",
  },
  {
    name: "META",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "↑",
    deltaType: "increase",
  },
  {
    name: "GTYS",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "↑",
    deltaType: "increase",
  },
  {
    name: "NETFLX",
    leads: 82,
    sales: "1,460,000",
    quota: "1,500,000",
    variance: "low",
    region: "Region A",
    status: "-",
    deltaType: "unchanged",
  },
  {
    name: "TESLA",
    leads: 49,
    sales: "1,230,000",
    quota: "1,800,000",
    variance: "medium",
    region: "Region B",
    status: "↓",
    deltaType: "moderateDecrease",
  },
];

export default function Example() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: {
    name: string;
    leads?: number;
    sales?: string;
    quota?: string;
    variance?: string;
    region?: string;
    status?: string;
    deltaType?: string;
  }) => selectedNames.includes(salesPerson.name) || selectedNames.length === 0;

  return (
    <Card>
      <h5>Total Trade - {salesPeople.length}</h5>
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="Select Salespeople..."
        className="max-w-xs"
      >
        {salesPeople.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Leads</TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Variance</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.leads}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell className="text-right">{item.quota}</TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={item.deltaType} size="xs"></BadgeDelta>
                </TableCell>
                <TableCell>
                  <Link
                    href="#"
                    className={buttonVariants({
                      size: "lg",
                      className: "w-full",
                      variant: "outline",
                    })}
                  >
                    Sell
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
