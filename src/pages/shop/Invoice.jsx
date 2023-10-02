import { Link } from "react-router-dom";

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
                
            </div>
        </div>
     );
}
 
export default Invoice;