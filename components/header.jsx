
const header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-5 sm:flex-col">
        <div className="font-bold text-4xl text-orange-500 sm:text-lime-500">
            LOGO
        </div>
        <div className="sm:py-3">
            <input type="text" placeholder="Search for articles" className="border-[1px] outline-none py-2 px-3 rounded-full w-96"/>
        </div>
        <ul className="flat-flex">
            <li className="header-links">Home</li>
            <li className="header-links">About</li>
            <li className="header-links">All Articles</li>
            <li className="header-links">Contact</li>
        </ul>
    </header>
  )
}

export default header