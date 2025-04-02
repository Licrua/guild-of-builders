import React from "react";
import { ServiceCard } from "./ServiceCard";
import { PlusIcon } from "./Icons";

export const ServicesList: React.FC = () => {
  const services = [
    {
      name: "Общий ремонт",
      price: "1200$/час",
      isInactive: true,
    },
    {
      name: "Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги Длинное наименование услуги",
      price: "1200$/час",
      additionalInfo: "По договоренности",
    },
    // Repeated services...
  ];

  return (
    <section className="relative m-8 bg-white rounded-md">
      <h1 className="px-0 py-6 text-2xl font-bold leading-8 text-center text-gray-900 max-sm:text-xl">
        Услуги и условия оплаты
      </h1>
      <div className="absolute right-[79px] top-[70px]">
        <PlusIcon />
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
