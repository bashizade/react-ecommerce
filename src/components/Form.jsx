export const Input = ({ name, placeholder, onChange, onBlur, value, type, label, className }) => {
    return (
        <div className={className} dir="rtl">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} onChange={onChange} onBlur={onBlur} value={value} className="input input-bordered w-full" />
        </div>
    )
}

export const CheckBox = ({ name, onChange, onBlur, value, label }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-right w-full mr-1">{label}</span>
                <input type="checkbox" onChange={onChange} onBlur={onBlur} value={value} className="checkbox" name={name} />
            </label>
        </div>
    );
}

export const Textarea = ({ name, placeholder, onChange, onBlur, value, label, className }) => {
    return (
        <div className={className} dir="rtl">
            <label>{label}</label>
            <textarea className="textarea textarea-bordered w-full" name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value}  dir="rtl" />
        </div>
    )
}