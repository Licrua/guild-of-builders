import React, { useState } from "react";
import { ServiceFormFields } from "./ServiceFormFields";

interface FormData {
  serviceName: string;
  paymentType: "negotiable" | "hourly" | "volume";
  hourlyRate?: number;
  volumeRate?: number;
  isActive: boolean;
}

export const CreateServiceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    serviceName: "",
    paymentType: "negotiable",
    isActive: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.serviceName) {
      newErrors.serviceName = "Наименование услуги обязательно";
    }

    if (formData.paymentType === "hourly" && !formData.hourlyRate) {
      newErrors.hourlyRate = "Укажите почасовую ставку";
    }

    if (formData.paymentType === "volume" && !formData.volumeRate) {
      newErrors.volumeRate = "Укажите ставку за объем";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      serviceName: "",
      paymentType: "negotiable",
      isActive: false,
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-15 px-8 w-full">
        <ServiceFormFields
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      </div>

      <div className="flex items-center gap-3 mt-10 mr-8 mb-[-91px] w-[209px] max-w-full font-inter text-sm font-medium">
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="flex-1 rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
