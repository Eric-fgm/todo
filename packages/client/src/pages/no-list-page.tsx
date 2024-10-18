import { Navigate } from "react-router-dom";
import { useListsQuery } from "../api/lists";
import ListPlaceholder from "../components/list-placeholder";
import { ROUTES } from "../utils";

const NoListPage: React.FC = () => {
  const { lists } = useListsQuery();

  if (lists.data.length) {
    const firstList = lists.data[0];
    return <Navigate to={ROUTES.LIST(firstList.id)} replace />;
  }

  return <ListPlaceholder className="h-full" />;
};

export default NoListPage;
