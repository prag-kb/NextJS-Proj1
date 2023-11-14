"use client";
import { CustomButtonProps } from "@/types";

const CustomButton = (props:CustomButtonProps) => {
    const { handleClick, title, btnType, containerStyles} = props

  return (
    <button type={btnType || 'button'} onClick={handleClick} className={`custom-btn`}>
        <span className={`flex-1 ${containerStyles}`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton