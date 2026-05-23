type buttonProps = {
    action?: () => void
    text: string
    type?: "submit" | "reset" | "button"
}

export default function Button({ action, text, type }: buttonProps) {
    return (<button onClick={action} type={type}>{text}</button>)
}

