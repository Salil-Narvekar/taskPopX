import React from 'react'

const InputField = ({ label, name, id, type, placeholder, value, onChange, onInput, onBlur, maxLength, min, starRequired }) => {
    return (
        <div className='grid grid-rows-2 font-sans text-slate-600'>

            <span className="text-xs text-left font-normal rounded-lg z-2 relative w-fit ml-2 pl-1 pr-1 mb-2" style={{ color: '#8D67FF', backgroundColor: '#F7F8F9' }}>
                <b>
                    {label}
                    {
                        starRequired === 'yes' &&
                        <span className='text-red-700'> *</span>
                    }
                </b>
            </span>

            <input
                className="py-2 pl-2 -mt-3 md:-mt-4 bg-transparent w-full border border-slate-300 rounded text-black text-xs md:text-sm lg:text-sm
                            transition duration-500 text-slate-600 font-semibold"
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                min={min}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onInput={onInput}
                maxLength={maxLength}
            />
        </div>
    )
}

export default InputField