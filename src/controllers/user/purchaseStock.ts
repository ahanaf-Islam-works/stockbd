interface props {
  stockId: string;
  quantity: number;
  userId: string;
}
export const purchaseStockController = async ({
  stockId,
  quantity,
  userId,
}: props) => {
  const message = "You Bought " + stockId;
  return { message };
};
