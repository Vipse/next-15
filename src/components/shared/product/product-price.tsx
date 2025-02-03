import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const formattedPrice = value.toFixed(2);
  const [intPrice, floatPrice] = formattedPrice.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      <span>{intPrice}</span>
      <span className="text-xs align-super">.{floatPrice}</span>
    </p>
  );
};

export default ProductPrice;
