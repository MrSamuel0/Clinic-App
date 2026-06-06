type BadgeProps = {
    status: "pending" | "confirmed" | "cancelled"
}
 
const statusMap = {
    pending:   { label: "Pendente",   className: "bg-yellow-900 text-yellow-300" },
    confirmed: { label: "Confirmada", className: "bg-green-900 text-green-300" },
    cancelled: { label: "Cancelada",  className: "bg-red-900 text-red-300" },
}
 
export default function Badge({ status }: BadgeProps) {
    const { label, className } = statusMap[status]
    return (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${className}`}>
            {label}
        </span>
    )
}
 