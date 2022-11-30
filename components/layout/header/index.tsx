export const Nav = () => {
  return (
    <div className="flex max-h-14 w-full flex-row items-center justify-between bg-black px-0 py-0">
      <div className="flex flex-1 flex-row items-center">
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
      </div>
      <div className="flex flex-1 flex-row items-center justify-end">
        <div className="flex flex-1 flex-row items-center justify-end mr-16">
          <a className="px-8" href="#">
          Client Name
        </a>
        <a className="px-8" href="#">
          Cart
        </a>
        </div>
        <div className="bg-purple-700 py-4 px-10 text-white pr-36">
          <a
            href="#"
            className="px-4 py-5 hover:bg-blue-900 hover:text-white"
          >
            Man
          </a>
          <a
            href="#"
            className="px-4 py-5 hover:bg-blue-900 hover:text-white"
          >
            Woman
          </a>
        </div>
      </div>
    </div>
  );
};
