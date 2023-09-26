const Button = ({ btnIcon, btnInfo }) => {
    
    const defaultBtnClassName = "flex flex-row items-center rounded px-2 py-2 mr-2 bg-custom-white text-white opacity-80 hover:opacity-100"

    return (
        <button className={defaultBtnClassName}>
            <span className="mr-2">{btnIcon}</span>
            <span><p>{btnInfo}</p></span>
        </button>
    );
}

export default Button;