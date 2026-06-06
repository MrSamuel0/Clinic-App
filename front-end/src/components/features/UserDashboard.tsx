import { Appointment } from "@/types/Index";

export default function DashboardPage() {
    const appointments: Appointment[] = []
    const confirmedCount = appointments.filter((a) => a.status === "confirmed").length
    const pendingCount = appointments.filter((a) => a.status === "pending").length
    const nextAppointment = appointments.length > 0 ? appointments[0] : null

    return (
        <main className="max-w-7xl mx-auto px-6 py-10">

            {/* Header */}
            <section className="mb-10">
                <h1 className="text-4xl font-bold text-white">Patient Dashboard</h1>
                <p className="text-gray-400 mt-2">Track your scheduled appointments</p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-900 border border-green-500/30 rounded-xl p-6">
                    <p className="text-gray-400 text-sm">Confirmed Appointments</p>
                    <h2 className="text-5xl font-bold text-green-400 mt-2">{confirmedCount}</h2>
                </div>

                <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6">
                    <p className="text-gray-400 text-sm">Pending Appointments</p>
                    <h2 className="text-5xl font-bold text-yellow-400 mt-2">{pendingCount}</h2>
                </div>

                <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-6">
                    <p className="text-gray-400 text-sm">Next Appointment</p>
                    <h2 className="text-lg font-semibold text-blue-400 mt-2">
                        {nextAppointment
                            ? `${nextAppointment.date} ${nextAppointment.time}`
                            : "None"}
                    </h2>
                </div>
            </section>

            {/* Next Appointment */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-10">
                <h2 className="text-xl font-semibold text-white mb-4">Next Appointment</h2>

                {nextAppointment ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <p className="text-gray-400 text-sm">Doctor</p>
                            <p className="text-white">{nextAppointment.doctor.name}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm">Specialty</p>
                            <p className="text-white">{nextAppointment.specialty}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm">Date</p>
                            <p className="text-white">{nextAppointment.date}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm">Time</p>
                            <p className="text-white">{nextAppointment.time}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-400">You have no scheduled appointments.</p>
                )}
            </section>

            {/* Appointments Table */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-gray-700">
                    <h2 className="text-xl font-semibold text-white">My Appointments</h2>
                </div>

                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-800 text-gray-400 text-sm">
                            <th className="text-left p-4">Doctor</th>
                            <th className="text-left p-4">Specialty</th>
                            <th className="text-left p-4">Date</th>
                            <th className="text-left p-4">Time</th>
                            <th className="text-left p-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.length > 0 ? (
                            appointments.map((appointment) => (
                                <tr
                                    key={appointment.id}
                                    className="border-t border-gray-800 hover:bg-gray-800/50"
                                >
                                    <td className="p-4">{appointment.doctor.name}</td>
                                    <td className="p-4">{appointment.specialty}</td>
                                    <td className="p-4">{appointment.date}</td>
                                    <td className="p-4">{appointment.time}</td>
                                    <td className="p-4">{appointment.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-10 text-gray-500">
                                    No appointments found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

        </main>
    )
}