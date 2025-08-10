import { Navbar } from "@/components/common/Navbar"
import BasicInformationView from "@/components/profile/BasicInformationView"
import InterestsMotivationsView from "@/components/profile/InterestsMotivationsView"
import ProjectsView from "@/components/profile/ProjectsView"
import SkillsExpertiseView from "@/components/profile/SkillsExpertiseView"
import { Button } from "@/components/ui/button"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"


export default function ProfilePage() {

    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Profile</h1>
                </div>
                <Link href="/home">
                    <Button>
                        <ArrowBigLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>
            </div>
            <div className=" flex items-center justify-center">
                <div className="w-full max-w-7xl space-y-4">
                    <BasicInformationView />
                    <InterestsMotivationsView />
                    <SkillsExpertiseView />
                    <ProjectsView />
                </div>
            </div>
        </div >
    )
}