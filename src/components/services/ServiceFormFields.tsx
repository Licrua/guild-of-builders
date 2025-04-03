import React from "react";

interface FormData {
  serviceName: string;
  paymentType: "negotiable" | "hourly" | "volume";
  hourlyRate?: number;
  volumeRate?: number;
  isActive: boolean;
}

interface ServiceFormFieldsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: Partial<FormData>;
}

export const ServiceFormFields: React.FC<ServiceFormFieldsProps> = ({
  formData,
  setFormData,
  errors,
}) => {
  return (
    <>
      <div className="rounded-md px-5 pr-20 py-5 gap-[40px_100px] flex flex-wrap font-nunito">
        <div className="text-gray-700 text-base my-auto">
          Наименование услуги *
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 flex flex-col text-sm text-gray-400">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Выберите услугу..."
              value={formData.serviceName}
              onChange={(e) =>
                setFormData({ ...formData, serviceName: e.target.value })
              }
              className="w-full outline-none"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ab154d80760ef3fd678c6095304c36b74c15800?placeholderIfAbsent=true&apiKey=40469a434b0e4cebb6979f674fe5b8cd"
              alt=""
              className="w-5 h-5 object-contain"
            />
          </div>
          {errors.serviceName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.serviceName}
            </span>
          )}
        </div>
      </div>

      <div className="flex mt-7 ml-5 w-[590px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <div className="text-gray-700 font-nunito text-base">
          Тип и сумма оплаты *
        </div>

        <div className="flex items-center gap-2 font-inter text-sm text-gray-700 font-medium">
          <input
            type="radio"
            id="negotiable"
            checked={formData.paymentType === "negotiable"}
            onChange={() =>
              setFormData({ ...formData, paymentType: "negotiable" })
            }
            className="w-4 h-4 border border-gray-300 rounded"
          />
          <label htmlFor="negotiable">По договоренности</label>
        </div>
      </div>

      <div className="flex items-center mt-2.5 w-[335px] max-w-full gap-7 mx-auto">
        <div className="flex items-center gap-2 flex-grow">
          <input
            type="radio"
            id="hourly"
            checked={formData.paymentType === "hourly"}
            onChange={() => setFormData({ ...formData, paymentType: "hourly" })}
            className="w-4 h-4 border border-gray-300 rounded"
          />
          <div className="flex flex-grow">
            <label
              htmlFor="hourly"
              className="text-gray-700 font-inter text-sm font-medium"
            >
              Почасавая оплата
            </label>
            {formData.paymentType === "hourly" && (
              <input
                type="number"
                value={formData.hourlyRate || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    hourlyRate: Number(e.target.value),
                  })
                }
                className="ml-2 px-3 py-2 border border-gray-300 rounded-md w-24"
              />
            )}
          </div>
        </div>
        <div className="text-gray-900 font-nunito text-sm">/час</div>
      </div>

      <div className="flex items-center mt-2 w-[364px] max-w-full gap-5 justify-between mx-auto">
        <input
          type="radio"
          id="volume"
          checked={formData.paymentType === "volume"}
          onChange={() => setFormData({ ...formData, paymentType: "volume" })}
          className="w-4 h-4 border border-gray-300 rounded"
        />
        <div className="flex items-center flex-grow">
          <label
            htmlFor="volume"
            className="text-gray-700 font-inter text-sm font-medium"
          >
            Оплата по объему работ
          </label>
          {formData.paymentType === "volume" && (
            <input
              type="number"
              value={formData.volumeRate || ""}
              onChange={(e) =>
                setFormData({ ...formData, volumeRate: Number(e.target.value) })
              }
              className="ml-2 px-3 py-2 border border-gray-300 rounded-md w-24"
            />
          )}
        </div>
        <div className="flex items-center font-nunito">
          <span className="text-gray-900 text-sm">/м</span>
          <sup className="text-black text-xs">2</sup>
        </div>
      </div>

      <div className="rounded-md mx-auto mt-5 w-[1544px] max-w-full px-5 pr-20 py-7 flex items-center gap-[40px_100px] flex-wrap">
        <div className="text-gray-700 font-nunito text-base">Активность</div>
        <div className="flex items-center rounded-xl bg-gray-200 min-h-6 px-0.5 py-0.5">
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, isActive: !formData.isActive })
            }
            className={`flex justify-center items-center rounded-lg w-5 h-5 ${
              formData.isActive ? "bg-white" : "bg-transparent"
            }`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9489896b46e27e23659eaf39b4ba593c7681c11a?placeholderIfAbsent=true&apiKey=40469a434b0e4cebb6979f674fe5b8cd"
              alt=""
              className="w-3 h-3 object-contain"
            />
          </button>
        </div>
      </div>
    </>
  );
};
