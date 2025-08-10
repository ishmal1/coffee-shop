"use client"

import { useParams } from "next/navigation"
import { AlertTriangle, ArrowBigLeft, Compass, Plus } from "lucide-react"
import VentureCard from "@/components/ventureCard"
import { useVentures } from "@/app/hooks/useVentures"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VentureDetailsSkeleton } from "@/components/skeletonLoaders"
import { useSession } from "next-auth/react"

export default function Venture() {
    const params = useParams()
    const ventureId = params.ventureId as string
    const { data: session } = useSession()
    const { venture, ventureCollaborators, isVentureLoading, onVentureError } = useVentures({ id: ventureId })



    if (isVentureLoading) {
        return (
            <VentureDetailsSkeleton />
        )
    }

    if (onVentureError || !venture) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Ventures</h1>
                    <Link href="/ventures/create">
                        <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            Create New Venture
                        </Button>
                    </Link>
                </div>

                <div className="bg-destructive/10 border border-destructive text-destructive rounded-lg p-4 flex items-start gap-4 mb-6">
                    <AlertTriangle className="w-5 h-5 mt-1" />
                    <div>
                        <p className="font-semibold">Something went wrong while loading your ventures.</p>
                        <p className="text-sm mt-1 text-muted-foreground">
                            This could be due to a temporary issue. You can try refreshing the page or check out other ventures in the meantime.
                        </p>
                        <Link href="/ventures" className="mt-3 inline-block">
                            <Button variant="outline" className="mt-2">
                                <Compass className="w-4 h-4 mr-2" />
                                Browse All Ventures
                            </Button>
                        </Link>
                    </div>
                </div>


            </div>
        );

    }
    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Venture: {venture?.name}</h1>
                <Link href="/ventures">
                    <Button>
                        <ArrowBigLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>
            </div>

            <div className="gap-6">
                <VentureCard
                    key={venture.id}
                    venture={venture}
                    collaborators={ventureCollaborators}
                    isDetailed
                    isAdmin={venture.venturerById === session?.user.id}
                />
            </div>
        </div>
    )
}
