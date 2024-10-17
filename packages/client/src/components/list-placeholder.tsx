import { Library } from "lucide-react";
import { Button } from "./buttons";
import { ListDialog } from "./dialogs";

const ListPlaceholder: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Library size={40} className="text-muted" />
      <h4 className="mb-2 mt-4">Brak list</h4>
      <p className="mb-4 text-muted">Nie stworzyłeś jeszcze żadnej listy.</p>
      <ListDialog trigger={<Button>Stwórz liste</Button>} />
    </div>
  );
};

export default ListPlaceholder;
