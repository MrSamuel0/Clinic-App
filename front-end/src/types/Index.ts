
export interface User {
    name: string
    age: number
    email: string
}
 
export interface Patient {
    id: string
    name: string
    age: number
    email: string
    phone?: string
}
 
export interface Doctor {
    id: string
    name: string
    specialty: string
    email: string
    crm: string
}
 
export interface Appointment {
    id: string
    patientName: string
    doctor: Doctor
    date: string
    time: string
    status: "pending" | "confirmed" | "cancelled"
    specialty: string
}
 