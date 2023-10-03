import { Input } from "./Form";

const LoginRegisterModal = () => {
    return (
        <>
            <button className="btn btn-primary" onClick={() => document.getElementById('loginregistermodal').showModal()}>ورود / ثبت نام</button>
            <dialog id="loginregistermodal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">ورود / ثبت نام</h3>
                    <div className="py-4">
                        <form action="" method="post">
                            <Input type={"text"} name={"phone"} placeholder={"0933***"} label={"شماره موبایل خود را وارد کنید"}/>
                            <button type="submit" className="btn btn-primary mt-5">مرحله بعد</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default LoginRegisterModal;