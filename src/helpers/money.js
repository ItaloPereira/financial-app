// function to format money
export const formatMoney = (amount = 0) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  const formatter = Intl.NumberFormat('pt-BR', options);

  return formatter.format(amount);
}
