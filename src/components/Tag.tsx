interface TagProps {
  label: string;
  variant?: "purple" | "cyan" | "green" | "gold";
}

const styles = {
  purple: "bg-[rgba(124,106,247,.15)] text-accent border border-[rgba(124,106,247,.25)]",
  cyan:   "bg-[rgba(34,211,238,.12)] text-accent-2 border border-[rgba(34,211,238,.2)]",
  green:  "bg-[rgba(52,211,153,.12)] text-accent-green border border-[rgba(52,211,153,.2)]",
  gold:   "bg-[rgba(244,196,48,.12)] text-gold border border-[rgba(244,196,48,.25)]",
};

export default function Tag({ label, variant = "purple" }: TagProps) {
  return (
    <span className={`inline-block px-[10px] py-[3px] rounded-full text-[0.72rem] font-semibold ${styles[variant]}`}>
      {label}
    </span>
  );
}
