import React from 'react'

const Button = ({ color, name, onClick, buttonLable }) => {
    return (
        <div>
            <button
                className=
                {
                    color === 'primary' ?
                        "py-2 pl-4 pr-4 text-white text-md font-semibold text-opacity-90 rounded-lg transition duration-500 cursor-pointer w-full"
                        :
                        "py-2 pl-4 pr-4 text-black text-md font-semibold text-opacity-90 rounded-lg transition duration-500 cursor-pointer w-full"
                }
                style={color === "primary" ? { backgroundColor: '#7140CC' } : { backgroundColor: '#CEBAFB' }}
                name={name}
                onClick={onClick}
            >
                {buttonLable}
            </button>
        </div>
    )
}

export default Button