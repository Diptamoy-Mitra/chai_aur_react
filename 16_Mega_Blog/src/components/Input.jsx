import React, { useId } from 'react'



//forwordRef accept reference state of input field
//referce comes from calling place  and state comes from component to that calling place
const Input = React.forwardRef(function Input(
    {
        label,
        type = 'text',
        placeholder,
        className = '',
        ...props

    }, ref
) {
    const inputId = useId()
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>

            }
            <input 
              
              type={type}
              className={` ${className}`}
              ref={ref}
              id={id}
              {...props}

            />
        </div>
    )
})

export default Input
