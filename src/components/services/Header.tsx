
export const Header = () => {
  return (
    <header className=" w-full h-16 bg-white shadow-md  px-6 relative">
      <div className="flex h-full justify-end gap-3 items-center">
        <div className="w-8 h-8 rounded-full hover:scale-125 p-3 border-2 border-gray-300 flex items-center justify-center">
          <span className="text-black">ru</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e32af2b611e9b1c6427df46d0ace4c617158621"
          alt="User avatar"
          className="w-8 h-8 rounded-full border border-gray-200"
        />
      </div>
    </header>
  );
};
