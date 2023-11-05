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
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useUserActions } from "@/providers/userActionsProvider";
interface Transaction {
  id: number;
  name: string;
  price: number;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  userId: string;
}

interface TransactionsProps {
  userStock: Transaction[];
}

const Transactions = ({ userStock }: TransactionsProps) => {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const { currentMarket } = useUserActions();

  const isStockSelected = (stock: Transaction) =>
    selectedNames.includes(stock.name) || selectedNames.length === 0;

  return (
    <Card>
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="Select Salespeople..."
        className="max-w-xs"
      >
        {userStock.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {currentMarket.map((item) => (
            <TableRow key={item?.price}>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.price}</TableCell>
              <TableCell>{item?.amount}</TableCell>
              <TableCell>
                <Link
                  href="#"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full",
                    variant: "outline",
                  })}
                >
                  Buy
                </Link>
              </TableCell>
            </TableRow>
          ))}

          {userStock
            .filter((item) => isStockSelected(item))
            .map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.amount}</TableCell>
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
};

export default Transactions;
