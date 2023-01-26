import { FC } from "react";

type Props = {
    className: string
    handleClick?: () => void
    text: string
    type: "button" | "submit" | "reset" | undefined
}

const Button: FC<Props> = ({className, handleClick, text, type}) =>{
return (
    <button className={className} onClick={handleClick} type={type}>
        {text}
    </button>
)
}

export {Button}