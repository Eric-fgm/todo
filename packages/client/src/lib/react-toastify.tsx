import { ToastContainer } from "react-toastify";

const ReactToast: React.FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
      limit={2}
      closeOnClick
      hideProgressBar
    />
  );
};

export default ReactToast;
