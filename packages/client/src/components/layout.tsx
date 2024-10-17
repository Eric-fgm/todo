import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import { ButtonIcon } from "./buttons";
import Spinner from "./spinner";
import { Transition } from "@headlessui/react";

const Layout: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth >= 1024,
  );

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner size={24} />
        </div>
      }
    >
      <div className="relative flex h-full flex-1" {...props}>
        <Sidebar
          className={`transition-[width] ease-out ${isSidebarVisible ? "w-5/6 xs:w-[272px]" : "w-0"}`}
        />
        <Transition show={isSidebarVisible}>
          <div
            className="transition-opacity- fixed left-0 top-0 z-[1] h-full w-full bg-[#000000a8] duration-150 data-[closed]:opacity-0 lg:hidden"
            onClick={() => setSidebarVisible(false)}
          />
        </Transition>
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-16 lg:px-8">
          <Outlet />
        </div>
        <div className="fixed bottom-4 left-4 z-20 flex gap-2">
          <ButtonIcon
            icon={Menu}
            variant="secondary"
            size="large"
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Layout;
