const Navbar = () => {
    return (
        <div className="flex justify-center w-full max-w-5xl">
            <div className="bg-primary bg-opacity-80 backdrop:blur-sm w-9/12 rounded-bl-xl rounded-br-xl flex justify-center items-center text-white">
                <ul className="menu menu-horizontal px-1" dir="rtl">
                    <li><a>صفحه اصلی</a></li>
                    <li tabIndex={0}>
                        <details className="z-50">
                            <summary>دسته بندی ها</summary>
                            <ul className="p-2 text-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>محصولات</a></li>
                    <li><a>ارتباط با ما</a></li>
                    <li><a>درباره ما</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;