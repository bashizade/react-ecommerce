const Navbar = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="bg-primary bg-opacity-80 backdrop:blur-sm w-9/12 rounded-bl-xl rounded-br-xl flex justify-center items-center text-white">
                <ul className="menu menu-horizontal px-1" dir="rtl">
                    <li clas><a>صفحه اصلی</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>دسته بندی ها</summary>
                            <ul className="p-2">
                                <li clas><a>Submenu 1</a></li>
                                <li clas><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li clas><a>محصولات</a></li>
                    <li clas><a>ارتباط با ما</a></li>
                    <li clas><a>درباره ما</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;