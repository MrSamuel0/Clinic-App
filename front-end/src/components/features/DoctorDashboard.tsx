"use client"

import { useEffect, useState } from "react"
import { Appointment, Patient } from "@/types/Index"
import Badge from "@/components/ui/Badge"

export default function DoctorDashboard() {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [patients, setPatients] = useState<Patient[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const [apptRes, patientsRes] = await Promise.all([
                    fetch("http://localhost:3000/appointments"),
                    fetch("http://localhost:3000/patients"),
                ])

                if (!apptRes.ok || !patientsRes.ok) throw new Error("Erro ao buscar dados")

                const apptData = await apptRes.json()
                const patientsData = await patientsRes.json()

                setAppointments(apptData)
                setPatients(patientsData)
            } catch (err) {
                setError("Não foi possível conectar à API.")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p className="text-gray-400">Carregando...</p>
    if (error)   return <p className="text-red-400">{error}</p>

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Dashboard — Médico</h1>
                <p className="text-gray-400 text-sm mt-1">Visão geral das suas consultas e pacientes</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard label="Total de Consultas" value={appointments.length} color="blue" />
                <StatCard label="Confirmadas" value={appointments.filter(a => a.status === "confirmed").length} color="green" />
                <StatCard label="Pacientes" value={patients.length} color="purple" />
            </div>

            {/* Appointments Table */}
            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <table className="w-full text-sm text-left text-gray-300">
                    <caption className="text-left text-base font-semibold text-white bg-gray-900 px-6 py-4">
                        Consultas de Hoje
                    </caption>
                    <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Paciente</th>
                            <th className="px-6 py-3">Especialidade</th>
                            <th className="px-6 py-3">Data</th>
                            <th className="px-6 py-3">Hora</th>
                            <th className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appt => (
                            <tr key={appt.id} className="bg-gray-900 border-b border-gray-700 hover:bg-gray-800 transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{appt.patientName}</td>
                                <td className="px-6 py-4">{appt.specialty}</td>
                                <td className="px-6 py-4">{appt.date}</td>
                                <td className="px-6 py-4">{appt.time}</td>
                                <td className="px-6 py-4"><Badge status={appt.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Patients Table */}
            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <table className="w-full text-sm text-left text-gray-300">
                    <caption className="text-left text-base font-semibold text-white bg-gray-900 px-6 py-4">
                        Meus Pacientes
                    </caption>
                    <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Nome</th>
                            <th className="px-6 py-3">Idade</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id} className="bg-gray-900 border-b border-gray-700 hover:bg-gray-800 transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{patient.name}</td>
                                <td className="px-6 py-4">{patient.age}</td>
                                <td className="px-6 py-4">{patient.email}</td>
                                <td className="px-6 py-4">{patient.phone ?? "—"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function StatCard({ label, value, color }: { label: string; value: number; color: "blue" | "green" | "purple" }) {
    const colorMap = {
        blue:   "border-blue-700 text-blue-400",
        green:  "border-green-700 text-green-400",
        purple: "border-purple-700 text-purple-400",
    }
    return (
        <div className={`bg-gray-900 border rounded-xl p-6 ${colorMap[color]}`}>
            <p className="text-gray-400 text-sm">{label}</p>
            <p className={`text-4xl font-bold mt-1 ${colorMap[color].split(" ")[1]}`}>{value}</p>
        </div>
    )
}
