import React, { useState } from 'react';
import { Badge } from './Badge';
import { EditIcon, DeleteIcon } from './Icons';
import DeletePopUp from './DeletePopUp';

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
  const [isPopupShown, setIsPopupShown] = useState<boolean>(false);
  const handleClose = () => {
    setIsPopupShown(!isPopupShown);
  };
  return (
    <article className="flex flex-col sm:flex-row mb-4 bg-white rounded-md border-solid shadow-sm border-[0.2px] border-gray-400 border-opacity-40">
      <div className="flex flex-1 items-center px-10 py-5 max-sm:px-5 max-sm:py-4">
        <div className="flex  items-center flex-1 gap-4">
          <h3 className="text-sm line-clamp-3 font-semibold leading-7 text-gray-700 max-sm:text-sm">
            {name}
          </h3>
          <div className="hidden sm:block">
            {isInactive && <Badge text="Неактивно" />}
          </div>
        </div>
        <div className="text-right pl-3">
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
      <div className="flex px-3 py-1 justify-between items-center gap-3 bg-gray-50 rounded-r-md border-solid border-l-[0.2px] border-l-gray-400 border-l-opacity-40 ">
        <div className="sm:hidden">
          {isInactive && <Badge text="Неактивно" />}
        </div>
        <div className="flex gap-4 ">
          <button
            className="hover:opacity-80 transition-opacity"
            aria-label="Edit service"
          >
            <EditIcon />
          </button>
          <button
            onClick={() => setIsPopupShown(!isPopupShown)}
            className="hover:opacity-80 transition-opacity"
            aria-label="Delete service"
          >
            <DeleteIcon />
          </button>
          {isPopupShown && (
            <DeletePopUp isOpen={isPopupShown} handleClose={handleClose} />
          )}
        </div>
      </div>
    </article>
  );
};
