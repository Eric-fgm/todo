import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: () => toast("Wystąpił błąd. Spróbuj ponownie później"),
    },
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

const ReactQueryProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
