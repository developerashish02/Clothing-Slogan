const Header = () => {
    return (
        <nav className="bg-gray-800 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center">
                <a href="#" className="text-white text-lg font-bold">
                    Style Avenue
                </a>
            </div>
            <div className="flex items-center">
                <a href="#" className="text-white hover:text-gray-300 mr-4">
                    Home
                </a>
                <a href="#" className="text-white hover:text-gray-300 mr-4">
                    Products
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    Cart (0)
                </a>
            </div>
        </nav>
    )
}

export default Header; 