export const calculatePercentage = (length: number): number => {
  const maxValue = 5000;
  return (length / maxValue) * 100;
};
