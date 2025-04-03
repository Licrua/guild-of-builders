import React from 'react';
import { Badge } from './Badge';
import { EditIcon, DeleteIcon } from './Icons';

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
    <article className="flex mb-4 bg-white rounded-md border-solid shadow-sm border-[0.2px] border-gray-400 border-opacity-40">
      <div className="flex flex-1 items-center px-10 py-5 max-sm:px-5 max-sm:py-4">
        <div className="flex items-center flex-1 gap-4">
          <h2 className="text-sm font-semibold leading-7 text-gray-700 max-sm:text-sm">
            {name}
          </h2>
          {isInactive && <Badge text="Неактивно" />}
        </div>
        <div className="text-right">
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
      <div className="flex justify-center items-center gap-3 bg-gray-50 rounded-r-md border-solid border-l-[0.2px] border-l-gray-400 border-l-opacity-40 w-[100px] max-sm:w-[60px]">
        <div className="flex gap-4">
          <button
            className="hover:opacity-80 transition-opacity"
            aria-label="Edit service"
          >
            <EditIcon />
          </button>
          <button
            className="hover:opacity-80 transition-opacity"
            aria-label="Delete service"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div>
        {/* <div className='max-w-[512px]'>
          <img src="/warn.png" alt="warning icon" />
          <h3>Удалить</h3>
          <p>Вы уверены что хотите удалить услугу “Наименование услуги”</p>
          <div>
            <button type="button">Отмена</button>
            <button className='text-red-500' type="button">Удалить</button>
          </div>
        </div> */}
      </div>
    </article>
  );
};
