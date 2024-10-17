import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Spinner from "./spinner";
import ErrorBoundary from "./error-boundary";

const Layout: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner size={24} className="h-full w-full" />}>
        <div className="flex h-full flex-1" {...props}>
          <Sidebar />
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-16 lg:px-8">
            <Outlet />
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
