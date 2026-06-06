"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

export default function LoginForm() {
    const router = useRouter()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        router.push("/user/dashboard")
    }

    return (
        <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-white">Bem-vindo</h1>
                <p className="text-gray-400 text-sm mt-1">Entre na sua conta</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Email</label>
                    <Input type="email" placeholder="seu@email.com" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Senha</label>
                    <Input type="password" placeholder="••••••••" />
                </div>
                <Button type="submit" text="Entrar" />
            </form>
            <p className="text-center text-gray-500 text-sm">
                Não tem conta?{" "}
                <a href="/user/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Cadastre-se
                </a>
            </p>
        </div>
    )
}