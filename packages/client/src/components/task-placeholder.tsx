import { Library } from "lucide-react";
import { Button } from "./buttons";
import { TaskDialog } from "./dialogs";

interface TaskPlaceholderProps {
  className?: string;
}

const TaskPlaceholder: React.FC<TaskPlaceholderProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Library size={40} className="text-muted" />
      <h4 className="mb-2 mt-4">Brak zadań</h4>
      <p className="mb-4 text-muted">Nie dodałeś jeszcze żadnego zadania.</p>
      <TaskDialog trigger={<Button>Dodaj zadanie</Button>} />
    </div>
  );
};

export default TaskPlaceholder;
