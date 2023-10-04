import React, { InputHTMLAttributes } from 'react'

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input type="text" className='my-2 p-2 border-[1px] border-slate-400' {...props} />
    )
}

export default Input;
