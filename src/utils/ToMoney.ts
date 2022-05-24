function ToMoney(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
export default ToMoney;
