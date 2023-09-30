const CheckBox = ({label,name}) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-right w-full mr-1">{label}</span>
                <input type="checkbox" className="checkbox" name={name} />
            </label>
        </div>
    );
}

export default CheckBox;