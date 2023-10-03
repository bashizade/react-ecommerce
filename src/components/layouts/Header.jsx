import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Input } from "../Form";
import LoginRegisterModal from "../LoginRegisterModal";

const Header = () => {
    const change_theme = (theme) => {
        document.documentElement.setAttribute("data-theme",theme);
    }
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="navbar bg-base-200 flex justify-between items-center flex-row-reverse w-full rounded-xl">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">react Ecommerce</a>
                </div>
                <div className="w-full max-w-xl flex flex-row-reverse items-center">
                    <div className="w-full ml-2">
                        <Input type={"text"} placeholder={"نام کالا مورد نظر خود را وارد کنید ...."} name={"serach"} />
                    </div>
                    <div>
                        <button className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex-none">
                    {/* <div className="dropdown dropdown-start">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                    <div>
                        <LoginRegisterModal />
                    </div>
                    <div className="dropdown dropdown-start">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 کالا</span>
                                <span className="text-info">جمع خرید: $999</span>
                                <div className="card-actions">
                                    <Link to="cart"><button className="btn btn-primary btn-block">نمایش سبد خرید</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <details className="dropdown">
                            <summary className="btn rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"></path>
                                </svg>
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className="p-1 hover:bg-base-200 rounded-lg cursor-pointer" onClick={()=>change_theme('light')}>light</li>
                                <li className="p-1 hover:bg-base-200 rounded-lg cursor-pointer" onClick={()=>change_theme('dark')}>dark</li>
                                <li className="p-1 hover:bg-base-200 rounded-lg cursor-pointer" onClick={()=>change_theme('fantasy')}>fantasy</li>
                                <li className="p-1 hover:bg-base-200 rounded-lg cursor-pointer" onClick={()=>change_theme('cupcake')}>cupcake</li>
                                <li className="p-1 hover:bg-base-200 rounded-lg cursor-pointer" onClick={()=>change_theme('acid')}>acid</li>
                                <li className="p-1 hover:bg-base-200 rounded-lg cursor-pointer" onClick={()=>change_theme('lemonade')}>lemonade</li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;