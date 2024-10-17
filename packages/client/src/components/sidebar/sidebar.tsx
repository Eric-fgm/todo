import { CircleHelp, Edit, Library, Plus, Trash } from "lucide-react";
import { useDeleteList, useListsQuery } from "../../api/lists";
import SidebarSection from "./sidebar-section";
import SidebarItem from "./sidebar-item";
import { ButtonIcon } from "../buttons";
import { ListDialog } from "../dialogs";
import { ROUTES } from "../../utils";
import Spinner from "../spinner";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const { lists } = useListsQuery();
  const { mutate: deleteList, isPending: isDeleting } = useDeleteList();

  return (
    <div
      className={`absolute z-10 h-full flex-shrink-0 overflow-hidden overflow-y-auto border-r bg-primary pb-20 pt-6 lg:static ${className}`}
    >
      <SidebarSection title="Główne">
        <SidebarItem icon={Library} text="Listy">
          <ListDialog
            trigger={<ButtonIcon icon={Plus} className="-mr-2 ml-auto" />}
          />
        </SidebarItem>
        <div className="pl-6">
          {lists?.data.map((list) => (
            <div key={list.id} className="group relative">
              <SidebarItem
                key={list.id}
                to={ROUTES.LIST(list.id)}
                text={list.name}
                className="my-1"
              />
              <div className="absolute right-2 top-1.5 flex items-center gap-1 opacity-100 group-hover:opacity-100">
                <ListDialog data={list} trigger={<ButtonIcon icon={Edit} />} />
                {isDeleting ? (
                  <div className="flex h-6 w-6 items-center justify-center">
                    <Spinner />
                  </div>
                ) : (
                  <ButtonIcon
                    icon={Trash}
                    onClick={() => deleteList(list.id)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </SidebarSection>
      <SidebarSection title="Dodatkowe" className="mt-8">
        <SidebarItem to="/help" icon={CircleHelp} text="Pomoc" />
      </SidebarSection>
    </div>
  );
};

export default Sidebar;
