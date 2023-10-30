"use client";
import { User } from "next-auth";

interface BuystocksProps {
  user: User;
}

const Buystocks = ({ user }: BuystocksProps) => {
  const userId = user.id;
  return (
    <div className="p-5 shadow-lg text-center">
      <p>{userId}</p>
    </div>
  );
};

export default Buystocks;
