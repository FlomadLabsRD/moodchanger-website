interface CaipoTextProps {
  text: string;
  className?: string;
  accentClassName?: string;
}

export default function CaipoText({
  text,
  className,
  accentClassName = "font-semibold text-[#9d52eb]",
}: CaipoTextProps) {
  const parts = text.split(/(CAIPO)/g);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part === "CAIPO" ? (
          <span key={index} className={accentClassName}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
}
