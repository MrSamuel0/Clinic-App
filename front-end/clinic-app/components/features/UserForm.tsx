import Button from "../ui/Button"
import Input from "../ui/Input"

export default function UserForm() {
    return (
        <div>
            <form>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="number" placeholder="Age" />
                <Input type="password" placeholder="Password" />
                <Button type="submit" text="Enviar" />
            </form>
        </div>
    )
}