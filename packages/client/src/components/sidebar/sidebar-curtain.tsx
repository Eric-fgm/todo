import { Transition } from "@headlessui/react";

interface SidebarCurtainProps {
  isOpen: boolean;
  onClick?: () => void;
}

const SidebarCurtain: React.FC<SidebarCurtainProps> = ({ isOpen, onClick }) => {
  return (
    <Transition show={isOpen}>
      <div
        className="fixed left-0 top-0 z-[1] h-full w-full bg-[#000000a8] transition-opacity duration-150 data-[closed]:opacity-0 lg:hidden"
        onClick={() => onClick?.()}
      />
    </Transition>
  );
};

export default SidebarCurtain;
