import React, { ButtonHTMLAttributes } from 'react'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...props} className='bg-blue-500 rounded-lg px-4 py-2 text-sm font-medium text-white'>
            {props.children}
        </button>
    )
}

export default Button
