"use client"
import { useProfile } from "@/app/hooks/useProfile"
import MyActivity from "@/components/Dashboard2/MyActivitySection"
import DashboardSkeleton from "@/components/skeletonLoaders"
import { Calendar } from "lucide-react"

function Home() {
    const { profile, isLoadingProfile } = useProfile()

    if (isLoadingProfile) return <DashboardSkeleton />

    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    const getGreeting = () => {
        if (currentHour < 12) return "Good morning"
        if (currentHour < 17) return "Good afternoon"
        return "Good evening"
    }

    const formatDate = () => {
        return currentTime.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
            <div className="py-8 px-4 max-w-7xl mx-auto">
                <header className="mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate()}</span>
                        </div>

                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            {getGreeting()}, {profile?.firstName}
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Ready to make today productive? Here's your activity overview.
                        </p>
                    </div>
                </header>

                <main className="space-y-8">

                    <MyActivity />

                </main>
            </div>
        </div>
    )
}

export default Home
