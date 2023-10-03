import { useState } from "react";

const SetCountProduct = () => {
    const [count,setCount] = useState(1);

    const plus = () => {
        setCount(prev => prev + 1);
    }

    const min = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    }


    return (
        <div className="join">
            <button className="btn join-item" onClick={() => min()}>-</button>
            <input type="text" name="count" className="input w-12 border-2 border-base-300 rounded-none join-item p-0 text-center" value={count} />
            <button className="btn join-item" onClick={() => plus()}>+</button>
        </div>
    );
}

export default SetCountProduct;