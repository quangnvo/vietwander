import Image from "next/image"

type ButtonProps = {
    type: "button" | "submit" | "reset"
    title: string
    icon?: string
    variant?: "btn_dark_green" | "btn_light_green" | "btn_dark_white" | "btn_light_white" | "btn_white" | "btn_white_text" | "btn_green" | "btn_dark_green_outline" | "btn_purple" | "btn_purple_pricing_non_popular" | "btn_purple_pricing_popular" | "btn_send" | "btn_getapp" | "btn_login_mobile"
    full?: boolean
    link?: string
}

const Button = ({ type, title, icon, variant, full, link }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flexCenter gap-3 border cursor-pointer ${variant} ${full && "w-full"}`}
        >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            {/* whitespace nowrap for everything in 1 line */}
            <p className="bold-16 whitespace-nowrap">{title}</p>
        </button>
    )
}

export default Button