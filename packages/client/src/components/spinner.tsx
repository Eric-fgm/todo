import { Loader } from "lucide-react";

interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 16, className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader size={size} className="animate-spin text-[inherit]" />
    </div>
  );
};

export default Spinner;
