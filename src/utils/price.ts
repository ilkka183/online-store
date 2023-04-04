interface PriceOptions {
  locale?: string;
  currency?: string;
}

export function formatPrice(
  value: number,
  { locale = "fi-FI", currency = "EUR" }: PriceOptions = {}
) {
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2
  });

  return formatter.format(value);
}
