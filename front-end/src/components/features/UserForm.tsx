"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../ui/Button"
import Input from "../ui/Input"

export default function UserForm() {
    const router = useRouter()

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        setError(null)

        if (!name || !email || !age || !password) {
            setError("Preencha todos os campos.")
            return
        }

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.")
            return
        }

        try {
            setLoading(true)

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/user`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: Number(id),
                        name,
                        email,
                        age: Number(age),
                        password,
                    }),
                }
            )

            if (!res.ok) {
                throw new Error("Erro ao cadastrar")
            }

            router.push("/user/dashboard")
        } catch (error) {
            console.error(error)
            setError("Não foi possível cadastrar.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">
                    Cadastro de Paciente
                </h1>

                <p className="text-gray-400 text-sm mt-2">
                    Preencha seus dados para criar uma conta.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <Input
                    type="number"
                    placeholder="Id (somente desenvolvimento)"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="number"
                    placeholder="Idade"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(e.target.value)
                    }
                />

                {error && (
                    <p className="text-red-400 text-sm">
                        {error}
                    </p>
                )}

                <Button
                    type="submit"
                    text={
                        loading
                            ? "Cadastrando..."
                            : "Cadastrar"
                    }
                />
            </form>
        </div>
    )
}