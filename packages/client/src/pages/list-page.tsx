import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { useListQuery } from "../api/lists";
import { Button, ButtonIcon } from "../components/buttons";
import { TaskDialog } from "../components/dialogs";
import TasksView from "../components/tasks-view";
import Spinner from "../components/spinner";

const ListPage: React.FC = () => {
  const list = useListQuery();

  if (!list) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div>
        <p className="pb-5 pt-6 text-sm">
          <span className="text-muted">Listy / </span>
          <span>{list.name}</span>
        </p>
        <div className="mb-6 flex items-center justify-between">
          <h2>{list.name}</h2>
          <TaskDialog
            trigger={<Button className="hidden lg:block">Dodaj zadanie</Button>}
          />
        </div>
        <Suspense fallback={<Spinner size={24} className="h-64 w-full" />}>
          <TasksView />
        </Suspense>
      </div>
      <TaskDialog
        trigger={
          <ButtonIcon
            icon={Plus}
            variant="secondary"
            size="large"
            className="fixed bottom-4 left-[60px] z-20 lg:hidden"
          />
        }
      />
    </>
  );
};

export default ListPage;
