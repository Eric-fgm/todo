import ReactQueryProvider from "../lib/react-query";
import ReactToast from "../lib/react-toastify";
import Router from "./router";
import "react-toastify/dist/ReactToastify.min.css";

const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <Router />
      <ReactToast />
    </ReactQueryProvider>
  );
};

export default App;
