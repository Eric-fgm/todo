import { useState } from "react";
import { CircleHelp, Library, Menu, Plus } from "lucide-react";
import { useListsQuery } from "../../api/lists";
import SidebarSection from "./sidebar-section";
import SidebarItem from "./sidebar-item";
import { ButtonIcon } from "../buttons";
import { ListDialog } from "../dialogs";
import SidebarListItem from "./sidebar-list-item";
import SidebarCurtain from "./sidebar-curtain";

const Sidebar: React.FC = () => {
  const { lists } = useListsQuery();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

  return (
    <>
      <div
        className={`absolute z-10 h-full flex-shrink-0 overflow-hidden overflow-y-auto border-r bg-primary pb-20 pt-6 transition-[width] ease-out lg:static ${isOpen ? "w-5/6 xs:w-[272px]" : "w-0"}`}
      >
        <SidebarSection title="Główne">
          <SidebarItem icon={Library} text="Listy">
            <ListDialog
              trigger={<ButtonIcon icon={Plus} className="-mr-2 ml-auto" />}
            />
          </SidebarItem>
          <div className="pl-6">
            {lists.data.map((list) => (
              <SidebarListItem key={list.id} {...list} />
            ))}
          </div>
        </SidebarSection>
        <SidebarSection title="Dodatkowe" className="mt-8">
          <SidebarItem to="/help" icon={CircleHelp} text="Pomoc" />
        </SidebarSection>
      </div>
      <SidebarCurtain isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <ButtonIcon
        icon={Menu}
        variant="secondary"
        size="large"
        className="fixed bottom-4 left-4 z-10"
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default Sidebar;
