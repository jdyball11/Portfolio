
const Navbar = () => {

    return (
    <>
    <nav className="bg-black px-2 sm:px-9 py-2.5 fixed w-full z-20 top-0 left-0 border-b h-20">
    <div className="flex items-center justify-end pt-2">
        <div className="items-center pr-10 justify-between">
            <ul className="flex justify-between gap-14">
            <li>
                <a href="#" className="text-white">Home</a>
            </li>
            <li>
                <a href="#" className="text-white">Skills</a>
            </li>
            <li>
                <a href="#" className="text-white">Projects</a>
            </li>
            </ul>
        </div>
        <div className="flex ">
            <button type="button" className="text-white bg-black-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">Let's Connect</button>
        </div>
    </div>
    </nav>

    </>
    )
}

export default Navbar