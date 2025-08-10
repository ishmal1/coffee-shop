"use client"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"
import { usePublicProfile } from "@/app/hooks/usePublicProfile"
import PublicBasicInformationView from "@/components/publicProfile/PublicBasicInformationView"
import PublicInterestsMotivationsView from "@/components/publicProfile/PublicInterestsMotivationsView"
import PublicProjectsView from "@/components/publicProfile/PublicProjectsView"
import PublicSkillsExpertiseView from "@/components/publicProfile/PublicSkillsExpertiseView"

export default function PublicProfilePage() {
    const params = useParams()
    const userId = params.userId as string

    const { publicProfile, isLoadingPublicProfile, error } = usePublicProfile(userId)

    if (isLoadingPublicProfile) {
        return (
            <div className="p-6 h-screen overflow-y-auto">
                <div className="flex items-center justify-center h-full">
                    <div className="text-lg">Loading profile...</div>
                </div>
            </div>
        )
    }

    if (error || !publicProfile) {
        return (
            <div className="p-6 h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Profile Not Found</h1>
                    <Link href="/home">
                        <Button>
                            <ArrowBigLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <h2 className="text-xl mb-4">User not found</h2>
                        <p className="text-gray-600">{error?.message || "The profile you're looking for doesn't exist."}</p>
                    </div>
                </div>
            </div>
        )
    }

    const displayName = publicProfile.profile?.hideSurname
        ? publicProfile.profile.firstName
        : `${publicProfile.profile?.firstName || ""} ${publicProfile.profile?.surname || ""}`.trim()

    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">{displayName || publicProfile.email}'s Profile</h1>
                </div>
                <Link href="/home">
                    <Button>
                        <ArrowBigLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-7xl space-y-4">
                    <PublicBasicInformationView data={publicProfile} />
                    <PublicInterestsMotivationsView data={publicProfile} />
                    <PublicSkillsExpertiseView data={publicProfile} />
                    <PublicProjectsView data={publicProfile} />
                </div>
            </div>
        </div>
    )
}
