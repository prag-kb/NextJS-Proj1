import Image from 'next/image'
import React from 'react'

interface ButtonProps {
    type: "button" | "submit"
    label: string
    icon?: string
    variant: "btn_dark_green" | "btn_white_text" | "btn_green"
}

const Button = ({ type, label, icon, variant }: ButtonProps) => {
    return (
        <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
            {icon && <Image alt='icon' src={icon} width={24} height={24} />}
            <label className='bold-16 whitespace-nowrap'>{label}</label>
        </button>
    )
}

export default Button