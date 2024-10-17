import { SpellCheck2 } from "lucide-react";
import { Component, type ErrorInfo } from "react";
import { Button } from "./buttons";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full flex-col items-center justify-center">
          <SpellCheck2 size={40} className="text-muted" />
          <h4 className="mb-2 mt-4">Wystąpił błąd</h4>
          <p className="mb-4 text-muted">
            Upewnij się że API działa prawidłowo.
          </p>
          <Button onClick={() => window.location.reload()}>
            Spróbuj ponownie
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
