import type { LucideProps } from "lucide-react";

interface RadioGroupProps {
  items: {
    icon?: React.ForwardRefExoticComponent<LucideProps>;
    name: string;
  }[];
  selected: string;
  onSelected?: (name: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  selected,
  onSelected,
}) => {
  return (
    <div className="flex h-9 items-center rounded-lg bg-tertiary p-1">
      {items.map(({ icon: Icon, name }) => (
        <button
          key={name}
          className={`flex h-full items-center rounded-md ${Icon ? "px-1.5" : "px-3"} ${name === selected ? "bg-primary" : ""}`}
          onClick={() => onSelected?.(name)}
        >
          {Icon ? <Icon size={16} /> : <p>{name}</p>}
        </button>
      ))}
    </div>
  );
};

export default RadioGroup;
