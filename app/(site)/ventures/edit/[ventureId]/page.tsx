"use client"
import { useParams } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowBigLeft, Loader2 } from "lucide-react"
import { useVentures } from "@/app/hooks/useVentures"
import Link from "next/link"
import VenturesForm from "@/components/ventures/VenturesForm"
import { useSession } from "next-auth/react"


// Mock data for demonstration - In real app, this would come from your database

export default function EditVenturePage() {
    const params = useParams()
    const { data: session } = useSession()
    const ventureId = params.ventureId as string
    const { venture, isVentureLoading, onVentureError } = useVentures({ id: ventureId })

    if (isVentureLoading) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/ventures">
                        <Button>
                            <ArrowBigLeft className="w-4 h-4 mr-2" />
                            Back to Ventures
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <CardTitle>Loading venture data...</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-4 bg-muted rounded w-1/4"></div>
                                    <div className="h-10 bg-muted rounded"></div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (onVentureError || !venture || venture?.venturerById !== session?.user?.id) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/ventures">
                        <Button>
                            <ArrowBigLeft className="w-4 h-4 mr-2" />
                            Back To Ventures
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-destructive">Error Loading Venture</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{onVentureError?.message || "Venture not found"}</p>
                        <div className="flex gap-2">
                            <Link href="/ventures">
                                <Button>
                                    <ArrowBigLeft className="w-4 h-4 mr-2" />
                                    Back
                                </Button>
                            </Link>
                            <Button variant="outline" onClick={() => window.location.reload()}>
                                Try Again
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }


    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Edit Venture</h1>
                    <p className="text-muted-foreground">Update your venture information</p>
                </div>
                <Link href="/ventures">
                    <Button>
                        <ArrowBigLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>
            </div>
            <VenturesForm venture={venture} redirect={true} />
        </div>
    )
}
