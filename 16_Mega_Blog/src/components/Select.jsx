import React, { useId } from 'react'

function Select({ options, label, classname = '', ...props }, ref) {

    const id = useId()
    return (
        <div className='w-full'>


            {
                label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>
            }
            <select {...props} id={id}
                ref={ref}
                className={` ${classname} px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`}

            >
                {
                    options?.map((option) => (
                        <options key={option} value={option}>
                            {option}
                        </options>
                    ))
                }


            </select>

        </div>
    )
}

export default  React.forwardRef(Select)
