interface SidebarSectionProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  children,
  title,
  className = "",
  ...props
}) => {
  return (
    <div className={`px-3 ${className}`} {...props}>
      <h4 className="mb-2 pl-4">{title}</h4>
      {children}
    </div>
  );
};

export default SidebarSection;
