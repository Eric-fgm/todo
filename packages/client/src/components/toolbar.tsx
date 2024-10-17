import { AlignJustify, SquareDashedBottom } from "lucide-react";
import RadioGroup from "./radio-group";

interface ToolbarProps {
  selectedStatus: string;
  selectedView: string;
  onStatusSelect: (status: string) => void;
  onViewSelect: (status: string) => void;
}

const statusesGroup = [
  { name: "Wszystko" },
  { name: "Zrobione" },
  { name: "Todo" },
];

const viewsGroup = [
  { name: "Grid", icon: SquareDashedBottom },
  { name: "List", icon: AlignJustify },
];

const Toolbar: React.FC<ToolbarProps> = ({
  selectedStatus,
  selectedView,
  onStatusSelect,
  onViewSelect,
}) => {
  return (
    <div className="flex justify-between">
      <RadioGroup
        items={statusesGroup}
        selected={selectedStatus}
        onSelected={onStatusSelect}
      />
      <RadioGroup
        items={viewsGroup}
        selected={selectedView}
        onSelected={onViewSelect}
      />
    </div>
  );
};

export default Toolbar;
