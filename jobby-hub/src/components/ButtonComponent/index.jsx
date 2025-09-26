import "./ButtonComponent.css"

export const ButtonComponent = ({
    btnText,
    btnClass,
    handleClick,
    ...rest
}) => {
    return(
        <>
        <button className={`custom-button d-flex justify-content-center align-items-center ${btnClass}`} onClick={handleClick} {...rest}>{btnText}</button>
        </>
    )
}