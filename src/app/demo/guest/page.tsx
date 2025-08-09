import * as React from "react"
import { GuestDashboardTemplate } from "@/components/templates"

const demoData = {
  userName: "Sarah Johnson",
  upcomingStay: {
    property: "Beachfront Villa - Poipu",
    checkIn: "Mar 15, 2024",
    checkOut: "Mar 22, 2024",
    guests: 4,
    confirmationNumber: "KPS-2024-001",
  },
  wifi: {
    network: "KPS-Guest",
    password: "Aloha2024!",
  },
}

export default function GuestDemoPage() {
  return <GuestDashboardTemplate {...demoData} />
}


