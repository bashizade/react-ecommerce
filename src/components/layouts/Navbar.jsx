const Navbar = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="bg-base-200 w-8/12 rounded-bl-xl rounded-br-xl flex justify-center items-center">
                <ul className="menu menu-horizontal px-1" dir="rtl">
                    <li><a>صفحه اصلی</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>دسته بندی ها</summary>
                            <ul className="p-2">
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