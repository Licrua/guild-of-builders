import React, { useState, useEffect } from 'react';
import { ServiceCard } from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from './Icons';

export const ServicesList: React.FC = () => {
  const [screenSize, setScreenSize] = useState<string>('desktop');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setScreenSize('mobile');
      } else {
        setScreenSize('desktop');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      name: 'Общий ремонт',
      price: '1200$/час',
      isInactive: true,
    },
    {
      name: 'Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги',
      price: '1200$/час',
      additionalInfo: 'По договоренности',
    },
    {
      name: 'Общий ремонт',
      price: '1200$/час',
      isInactive: true,
    },
    {
      name: 'Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги',
      price: '1200$/час',
      additionalInfo: 'По договоренности',
    },
    {
      name: 'Общий ремонт',
      price: '1200$/час',
      isInactive: true,
    },
    {
      name: 'Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги',
      price: '1200$/час',
      additionalInfo: 'По договоренности',
    },
  ];

  return (
    <section className="relative flex flex-col my-8 bg-white rounded-md">
      <h1 className="py-6 text-2xl font-bold leading-8 text-center text-gray-900 sm:text-4xl">
        {screenSize === 'mobile' && 'Мои проекты'}
        {screenSize === 'desktop' && 'Услуги и условия оплаты'}
      </h1>
      <div className="flex justify-end pe-9  md:pe-10 mt-4">
        <button
          className="bg-blue-700 inline-block rounded-full p-1 sm:p-0 hover:bg-blue-800 transition-colors"
          aria-label="Add new service"
          onClick={() => navigate('/user/dashboard/createService')}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="px-12 py-5 max-md:px-8 max-md:py-4 max-sm:px-4 max-sm:py-2.5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            price={service.price}
            isInactive={service.isInactive}
            additionalInfo={service.additionalInfo}
          />
        ))}
      </div>
    </section>
  );
};
