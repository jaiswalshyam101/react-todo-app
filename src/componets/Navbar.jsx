const Navbar = ({theme , changeTheme}) => {
return(
        <nav className={theme ? "bg-black py-2 px-8 flex items-center justify-between" : "flex items-center justify-between bg-blue-900 py-2 px-8"}>
            <h1 className="text-white font-bold ">react Todo App</h1>
            <button onClick={() =>changeTheme()} className="bg-blue-500 py-1 px-2 rounded-md text-sm font-bold text-white cursor-pointer hover:bg-blue-800">Switch Theme</button>
        </nav>
    )
}

export default Navbar