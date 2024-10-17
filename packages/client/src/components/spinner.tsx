import { Loader } from "lucide-react";

interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 16, className = "" }) => {
  return (
    <div className={`inline-block animate-spin ${className}`}>
      <Loader size={size} className="text-[inherit]" />
    </div>
  );
};

export default Spinner;
