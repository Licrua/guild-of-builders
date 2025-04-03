import React from 'react';

interface DeletePopUpProps {
  isOpen: boolean;
  handleClose: () => void;
}

const DeletePopUp: React.FC<DeletePopUpProps> = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-[512px] ">
        <div className="flex items-center">
          <img
            src="/public/warn.svg"
            alt="warn-icon"
            className="w-6 h-6 mr-2"
          />
          <h3 className="text-lg font-semibold">Удалить</h3>
        </div>
        <p>Вы уверены, что хотите удалить услугу “Наименование услуги”</p>
        <div className="mt-4 flex justify-end gap-3">
          <button
            className="w-[92px] text-center border-1 border-[#D1D5DB] flex items-center text-black bg-transparent h-[38px]  rounded-md py-[9px] px-[17px]"
            onClick={handleClose}
          >
            Отмена
          </button>
          <button
            className="w-[92px] text-white flex items-center bg-[#DC2626] h-[38px] rounded-md py-[9px] px-[17px]"
            onClick={handleClose}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
