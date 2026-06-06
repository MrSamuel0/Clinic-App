type TextareaProps = {
    placeholder: string
}

export default function TextArea({placeholder}: TextareaProps) {
    return(<textarea placeholder={placeholder}></textarea>)
}