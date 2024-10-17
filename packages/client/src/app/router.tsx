import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoListPage, ListPage } from "../pages";
import Layout from "../components/layout";
import { ROUTES } from "../utils";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NoListPage />} />
          <Route path={ROUTES.LISTS} element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
