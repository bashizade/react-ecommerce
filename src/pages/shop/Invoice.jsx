import { Link } from "react-router-dom";
import {Input} from "../../components/Form"

const Invoice = () => {
    return ( 
        <div className="flex space-x-3">
            <div className=" w-96">
                <div className="rounded-xl p-2 bg-base-200">
                    <div className="flex justify-between border-b-2 pb-1 mb-5">
                        <div>
                            <p>50,000 تومان</p>
                        </div>
                        <div>
                            <p className="text-right">هزینه ارسال</p>
                        </div>
                    </div>
                    <div className="flex justify-between border-b-2 pb-1 mb-5">
                        <div>
                            <p>50,000 تومان</p>
                        </div>
                        <div>
                            <p className="text-right">جمع سبد خرید</p>
                        </div>
                    </div>
                    <div className="flex justify-between border-b-2 pb-1 mb-5">
                        <div>
                            <p>100,000 تومان</p>
                        </div>
                        <div>
                            <p className="text-right">مبلغ پرداختی</p>
                        </div>
                    </div>
                    <div>
                        <Link to={""}><button type="button" className="btn btn-primary">پرداخت</button></Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-base-200 rounded-xl p-1">
                <form action="" method="post">
                    <Input name={"name"} placeholder={"امیر..."} label={"نام و نام خانوادگی گیرنده"} className={"mb-3"} />
                    <Input name={"state"} placeholder={"یزد..."} label={"استان گیرنده"} className={"mb-3"} />
                    <Input name={"city"} placeholder={"تفت..."} label={"شهر گیرنده"} className={"mb-3"} />
                    <Input name={"street"} placeholder={"صدرا..."} label={"خیابان گیرنده"} className={"mb-3"} />
                    <Input name={"postalcode"} placeholder={"8915..."} label={"کدپستی گیرنده"} className={"mb-3"} />
                    <Input name={"email"} placeholder={"example@gmail.com..."} label={"ایمیل گیرنده"} className={"mb-3"} />
                    <Input name={"phone"} placeholder={"0933..."} label={"شماره موبایل گیرنده"} className={"mb-3"} />
                </form>
            </div>
        </div>
     );
}
 
export default Invoice;