type buttonProps = {
    action?: () => void
    text: string
    type?: "submit" | "reset" | "button"
}

export default function Button({ action, text, type }: buttonProps) {
    return (
        <button
            onClick={action}
            type={type}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-2"
        >
            {text}
        </button>
    )
}

