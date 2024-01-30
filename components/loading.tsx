import { ButtonLoading } from "./button-loading";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <ButtonLoading variant="link" />
    </div>
  );
};
