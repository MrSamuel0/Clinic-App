type inputProps = {
    type?: "text" | "password" | "number" | "date" | "email"
    placeholder: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, placeholder, value, onChange }: inputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors"
        />
    )
}