import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ServiceFormFields } from "./ServiceFormFields";

interface FormData {
  serviceName: string;
  paymentType: "negotiable" | "hourly" | "volume";
  hourlyRate?: number;
  volumeRate?: number;
  isActive: boolean;
  description?: string;
  workPrice?: number;
  photos?: File[];
}

export const EditServiceForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    serviceName: "",
    paymentType: "negotiable",
    isActive: false,
    description: "",
    workPrice: 0,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    // TODO: Fetch service data based on id
    // This is a mock implementation
    setFormData({
      serviceName: "Общий ремонт",
      paymentType: "hourly",
      hourlyRate: 1200,
      isActive: true,
      description: "Описание работы",
      workPrice: 1200,
    });
  }, [id]);

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
      // TODO: Handle form submission
      console.log("Form submitted:", formData);
      navigate("/user/dashboard");
    }
  };

  const handleCancel = () => {
    navigate("/user/dashboard");
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        photos: fileArray,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8">
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-900">Наименование услуги *</label>
          <input
            type="text"
            value={formData.serviceName}
            onChange={(e) =>
              setFormData({ ...formData, serviceName: e.target.value })
            }
            placeholder="Введите наименование услуги"
            className="w-full p-2.5 border border-gray-300 rounded text-sm"
          />
          {errors.serviceName && (
            <span className="text-red-500 text-xs">{errors.serviceName}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-900">Фото работы *</label>
          <div className="border border-dashed border-gray-300 rounded p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">
                Upload a file or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
              >
                Выбрать файл
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-900">Описание работы</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-2.5 border border-gray-300 rounded text-sm h-30 resize-none"
            rows={5}
          />
          <span className="text-xs text-gray-500">
            Максимально 250 символов
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-900">Стоимость работы</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={formData.workPrice}
              onChange={(e) =>
                setFormData({ ...formData, workPrice: Number(e.target.value) })
              }
              className="w-30 p-2.5 border border-gray-300 rounded text-sm"
            />
            <span className="text-sm text-gray-500">₪</span>
          </div>
        </div>

        <ServiceFormFields
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      </div>

      <div className="flex justify-end gap-3 mt-8">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded hover:bg-gray-50"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
