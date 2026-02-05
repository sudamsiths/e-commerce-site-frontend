import { useEffect } from "react";

interface ToastProps {
  readonly message: string;
  readonly type: "success" | "error" | "info";
  readonly onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-75`}
      >
        <div className="flex-1">
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 font-bold text-xl leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast;
