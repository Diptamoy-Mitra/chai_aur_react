import React, { useId } from 'react'

function Input({ label, placeholder, className = '', type = 'text', ...props }, ref) {

    const id = useId(); //generate unique id for input field

    return (
        <div className='w-full'>
            {
                label && <label className='text-[15px] font-bold inline-block mb-1 pl-1' htmlFor={id}>{label}</label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                id={id}
                {...props}

            />

        </div>
    )
}

export default React.forwardRef(Input)
