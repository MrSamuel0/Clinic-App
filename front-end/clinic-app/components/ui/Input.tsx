type inputProps = {
    type?: "text" | "password" | "number" | "date" | "email"
    placeholder: string 
}

export default function Input ({ type, placeholder }: inputProps) {
    return (<input type={type} placeholder={placeholder}/>)
}