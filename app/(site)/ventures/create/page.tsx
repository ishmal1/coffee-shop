import { Button } from "@/components/ui/button"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"
import VenturesForm from "@/components/ventures/VenturesForm"



export default function CreateVenturePage() {
    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Create Venture</h1>
                    <p className="text-muted-foreground">Create a new venture</p>
                </div>
                <Link href="/ventures">
                    <Button>
                        <ArrowBigLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>
            </div>
            <VenturesForm redirect={true} />
        </div>
    )
}
