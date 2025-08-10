"use client"
import { ProfileType, useProfile } from "@/app/hooks/useProfile"
import InterestsMotivationsSection from "@/components/onboarding/OnboardingForm/InterestsMotivationsSection"
import { Button } from "@/components/ui/button"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"


export default function OnboardingPage() {
    const { profile } = useProfile()

    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Profile</h1>
                </div>
                <Link href="/profile">
                    <Button>
                        <ArrowBigLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>
            </div>
            <div className=" flex items-center justify-center">
                <div className="w-full max-w-7xl space-y-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 w-full">
                        <InterestsMotivationsSection profile={profile as ProfileType} />

                    </div>
                </div>
            </div>
        </div >
    )
}