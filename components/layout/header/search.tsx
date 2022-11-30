import { AiOutlineSearch } from 'react-icons/ai'

export const Search = () => {
    return(
        <div className="flex bg-gray-50 justify-center items-center px-8 h-14 w-screen relative">
            <div>
                <a href="#" className="text-gray-700 uppercase px-4 py-4 hover:text-gray-900">Popular</a>
                <a href="#" className="text-gray-700 uppercase px-4 py-4 hover:text-gray-900">Most Viewed</a>
                <a href="#" className="text-gray-700 uppercase px-4 py-4 hover:text-gray-900">Newest</a>
                <a href="#" className="text-gray-700 uppercase px-4 py-4 hover:text-gray-900">Random</a>
            </div>
            <button className="absolute right-0 top-0 h-14 lg:mr-32 w-14 text-gray-700 hover:text-white hover:bg-black flex items-center justify-center">
                <AiOutlineSearch className='text-2xl font-bold' />
            </button>
        </div>
    )
}