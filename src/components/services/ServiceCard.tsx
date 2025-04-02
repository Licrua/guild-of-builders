import React from "react";
import { Badge } from "./Badge";
import { EditIcon, DeleteIcon } from "./Icons";

interface ServiceCardProps {
  name: string;
  price: string;
  isInactive?: boolean;
  additionalInfo?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  price,
  isInactive,
  additionalInfo,
}) => {
  return (
    <article className="flex mb-4 bg-white rounded-md border-solid shadow-md border-[0.2px] border-gray-400 border-opacity-40">
      <div className="flex flex-1 items-center px-10 py-5 max-sm:px-5 max-sm:py-4">
        <h2 className="text-sm font-semibold leading-7 text-gray-700 max-sm:text-sm">
          {name}
        </h2>
        {isInactive && <Badge className="ml-4" text="Неактивно" />}
        <div className="ml-auto text-right">
          <div className="text-sm leading-5 text-gray-700 max-sm:text-xs">
            {price}
          </div>
          {additionalInfo && (
            <div className="mt-1 text-sm leading-5 text-gray-700 max-sm:text-xs">
              {additionalInfo}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-50 rounded-none border-solid border-l-[0.2px] border-l-gray-400 border-l-opacity-40 w-[100px] max-sm:w-[60px]">
        <div className="flex gap-2.5">
          <button aria-label="Edit service">
            <EditIcon />
          </button>
          <button aria-label="Delete service">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </article>
  );
};
