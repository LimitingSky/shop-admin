export const Nav = () => {
  return (
    <div className="flex w-full max-h-14 flex-1 flex-row items-center justify-between bg-gray-900 px-0 py-0">
      <div className="mx-20">logo</div>
      <div className="flex flex-1 flex-row text-white">
        <a href="#" className="mr-2 px-4 py-4 hover:text-blue-900">
          Articles
        </a>
        <a href="#" className="mr-2 px-4 py-4 hover:text-blue-900">
          Articles
        </a>
        <a href="#" className="mr-2 px-4 py-4 hover:text-blue-900">
          Articles
        </a>
        <a href="#" className="px-4 py-4 hover:text-blue-900">
          Articles
        </a>
      </div>
      <div className="bg-blue-700 py-4 px-10">
        <a href="#" className="px-4 py-5 text-gray-700 hover:text-white hover:bg-blue-900">Man</a>
        <a href="#" className="px-4 py-5 text-gray-700 hover:text-white hover:bg-blue-900">Woman</a>
      </div>
    </div>
  );
};
