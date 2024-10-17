import { NavLink } from "react-router-dom";
import type { LucideProps } from "lucide-react";

interface SidebarItemProps extends React.PropsWithChildren {
  icon?: React.ForwardRefExoticComponent<LucideProps>;
  to?: string;
  className?: string;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon: Icon,
  text,
  to,
  className = "",
}) => {
  const Tag = to ? NavLink : "div";

  return (
    <Tag
      type="button"
      className={
        (to
          ? ({ isActive }: never) =>
              `flex h-9 w-full items-center gap-2 rounded-lg px-4 ${to ? "hover:bg-tertiary" : ""} ${className} ${isActive ? "bg-tertiary" : ""}`
          : "flex h-9 w-full items-center gap-2 rounded-lg px-4") as never
      }
      to={to!}
    >
      {Icon && <Icon width={16} height={16} />}
      <span className="truncate text-sm font-medium">{text}</span>
      {children}
    </Tag>
  );
};

export default SidebarItem;
