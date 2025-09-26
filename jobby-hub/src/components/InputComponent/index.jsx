
import "./InputComponent.css"
export const InputComponent = ({
    type,
    placeholder,
    id,
    label,
    inputClass,
    prefixIcon,
    handleChange,
    handleKeyDown,
    ...rest
}) => {
    return(
        <>
        <label htmlFor={id} className="input-label text-uppercase d-block mb-3">{label}</label>
        <div className={`custom-input d-flex gap-3 w-100 ${inputClass}`}>
            {prefixIcon && 
            <span>
                {prefixIcon}
            </span>
            }
            <input type={type} placeholder={placeholder} className="w-100" id={id} onChange={handleChange}{...rest}/>
        </div>
        </>
    )
}