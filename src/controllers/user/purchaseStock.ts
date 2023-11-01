import db from "@/db";
interface Props {
  stockName: string;
  quantity: number;
  userId: string;
  price: number;
}
export const purchaseStockController = async ({
  stockName,
  quantity,
  userId,
  price,
}: Props) => {
  // Step 1: Find the user
  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found");
  // Step 2: Check if the user has enough balance
  if (user.balance < price * quantity) throw new Error("Insufficient funds"); // Step 3: Update the user's balance
  const updatedUser = await db.user.update({
    where: { id: user.id },
    data: { balance: user.balance - price * quantity },
  }); // Step 4: Find the user's stocks
  const userStocks = await db.stocks.findMany({ where: { userId: user.id } });
  // Step 5: Find or create the stock
  const stockExists = userStocks.find((stock) => stock.name === stockName);
  const updatedStockData = {
    name: stockName,
    amount: (stockExists?.amount || 0) + quantity,
    userId: user.id,
    price,
  };
  const updatedStock = stockExists
    ? await db.stocks.update({
        where: { id: stockExists.id },
        data: updatedStockData,
      })
    : await db.stocks.create({ data: updatedStockData });
  // Step 6: Return the updated information
  return {
    name: updatedStock.name,
    price: updatedStock.price,
    amount: updatedStock.amount,
    balance: updatedUser.balance,
  };
};
