import React from "react";
import { CreateServiceForm } from "./CreateServiceForm";

export const CreateService: React.FC = () => {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="w-full pt-9 pb-[454px] flex flex-col items-stretch bg-white rounded-md">
        <h1 className="text-2xl font-bold text-gray-900 text-center font-nunito">
          Создание услуги
        </h1>
        <CreateServiceForm />
      </div>
    </div>
  );
};
