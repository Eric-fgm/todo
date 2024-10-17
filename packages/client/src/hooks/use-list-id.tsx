import { useParams } from "react-router-dom";

const useListId = () => {
  const { listId } = useParams();

  if (!listId) {
    throw new Error("You are using it in wrong route");
  }

  return Number.parseInt(listId, 10);
};

export default useListId;
