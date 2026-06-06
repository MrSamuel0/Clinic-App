import FeatureCard from "@/components/features/FeatureCard";
import Link from "next/link"
 
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            {/* Hero */}
            <div className="mb-6">
                <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                    Sistema de Gestão
                </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                Clinic <span className="text-blue-400">App</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-10">
                Gerencie consultas,
                <br/>
                pacientes e médicos
                <br/>
                em um único sistema.
            </p>
 
            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
                <Link
                    href="/login"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                    Entrar como Paciente
                </Link>
                <Link
                    href="/login"
                    className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                    Entrar como Médico
                </Link>
            </div>
 
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-3xl">
                <FeatureCard
                    icon="📅"
                    title="Agendamento"
                    description="Marque e gerencie consultas com facilidade."
                />  
                <FeatureCard
                    icon="👨‍⚕️"
                    title="Médicos"
                    description="Acesse o perfil e especialidade dos profissionais."
                />
                <FeatureCard
                    icon="📋"
                    title="Histórico"
                    description="Acompanhe todo o histórico de atendimentos."
                />
            </div>
        </div>
    )
}