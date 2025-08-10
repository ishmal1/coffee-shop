"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Building2, Users, Lightbulb } from "lucide-react"
import VentureCard from "@/components/ventureCard"
import { useVentures } from "@/app/hooks/useVentures"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useInView } from "react-intersection-observer"
import { useSession } from "next-auth/react"

export default function VentureList() {
    const router = useRouter()
    const { data: session } = useSession() // Get current user session
    const [selectedTab, setSelectedTab] = useState<string>("all")
    const [filters, setFilters] = useState({
        location: "",
        stage: "",
        field: "",
        category: "",
        focusArea: "",
    });
    const limit = 12
    const { allVentures, fetchNextPage, hasNextPage, isFetchingNextPage, allVenturesOpenToCollaboration, isAllVenturesLoading, isAllVenturesOpenToCollaborationLoading, isUserVenturesLoading, } = useVentures({ filters, limit })

    console.log("all ventures", allVentures)
    const { uniqueLocations, isLoadingLocations } = useVentures({
        filters,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView])

    if (isUserVenturesLoading) {
        return (
            <div className="max-w-6xl mx-auto px-3 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Explore Other Ventures</h1>
                    <Link href="/ventures/create">
                        <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            Create New Venture
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="animate-pulse">
                            <CardHeader>
                                <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-muted rounded w-1/2"></div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="h-4 bg-muted rounded"></div>
                                    <div className="h-4 bg-muted rounded w-5/6"></div>
                                    <div className="h-4 bg-muted rounded w-4/6"></div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    const handleFilterChange = (key: keyof typeof filters, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }))
    }

    const currentUserId = session?.user?.id

    return (
        <div className="px-3 py-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Explore Other Ventures</h1>
                <Link href="/ventures/create">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Venture
                    </Button>
                </Link>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full mb-6">
                <TabsList className="">
                    <TabsTrigger value="all">
                        {" "}
                        <Lightbulb className="w-4 h-4 mr-2" />
                        All ({allVentures?.length ?? 0})
                    </TabsTrigger>
                    {/* <TabsTrigger value="my-ventures">
                        My Venture ({userVentures?.length ?? 0})
                    </TabsTrigger> */}
                    <TabsTrigger value="collaborating">
                        <Users className="w-4 h-4 mr-2" />
                        Open to Collaborate ({allVenturesOpenToCollaboration?.length ?? 0})
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                    <div className="flex flex-row flex-wrap gap-4 mb-6">
                        <div>
                            <Select
                                value={filters.location}
                                onValueChange={(value) => handleFilterChange("location", value === "all" ? "" : value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Locations" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    {uniqueLocations.map((loc) => (
                                        <SelectItem key={loc} value={loc}>
                                            {loc}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select
                                value={filters.stage}
                                onValueChange={(value) => handleFilterChange("stage", value === "all" ? "" : value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Stages" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Stages</SelectItem>
                                    <SelectItem value="Seed">Seed</SelectItem>
                                    <SelectItem value="Series A">Series A</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select
                                value={filters.field}
                                onValueChange={(value) => handleFilterChange("field", value === "all" ? "" : value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Fields" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Fields</SelectItem>
                                    <SelectItem value="Biotechnology">Biotechnology</SelectItem>
                                    <SelectItem value="AI">AI</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select
                                value={filters.category}
                                onValueChange={(value) => handleFilterChange("category", value === "all" ? "" : value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>

                                    <SelectItem value="Pharma/Therapeutics">Pharma/Therapeutics</SelectItem>
                                    <SelectItem value="BioTech">BioTech</SelectItem>
                                    {/* Add more categories */}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select
                                value={filters.focusArea}
                                onValueChange={(value) => handleFilterChange("focusArea", value === "all" ? "" : value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Focus Areas" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Focus Areas</SelectItem>
                                    <SelectItem value="AI">AI</SelectItem>
                                    <SelectItem value="Sustainability">Sustainability</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-y-6 gap-x-4"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
                        }}
                    >
                        {allVentures?.map((venture) => (
                            <VentureCard
                                key={venture.id}
                                venture={venture}
                                isAdmin={currentUserId === venture.venturerById} // Add this line
                            />
                        ))}
                        {allVentures?.length === 0 && !isAllVenturesLoading && (
                            <Card className="text-center py-12">
                                <CardContent className="pt-6">
                                    <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                                    <CardTitle className="mb-2">No ventures found</CardTitle>
                                    <CardDescription className="mb-4">{`No ventures match the "${selectedTab}" filter.`}</CardDescription>
                                    <Link href="/ventures/create">
                                        {/* <Button>
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create New Venture
                                        </Button> */}
                                    </Link>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {hasNextPage ? (
                        <div ref={ref} aria-hidden="true" className="h-1 w-full">
                            <div className="text-center mt-5">Loading..</div> :
                        </div>
                    ) : (
                        <div className="text-center mt-5 ">No more ventures</div>
                    )}
                </TabsContent>
                {/* <TabsContent value="my-ventures" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {userVentures.map((venture) => (
                            <VentureCard
                                key={venture.id}
                                venture={venture}
                                isAdmin
                            />
                        ))}
                        {userVentures.length === 0 && !isUserVenturesLoading && (
                            <Card className="text-center py-12">
                                <CardContent className="pt-6">
                                    <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                                    <CardTitle className="mb-2">No ventures found</CardTitle>
                                    <CardDescription className="mb-4">
                                        {`No ventures match the "${selectedTab}" filter.`}
                                    </CardDescription>
                                    <Link href="/ventures/create">

                                        <Button>
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create New Venture
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </TabsContent> */}
                <TabsContent value="collaborating" className="mt-6">
                    <div
                        className="grid grid-cols-1 gap-y-6 gap-x-4"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
                        }}
                    >
                        {allVenturesOpenToCollaboration.map((venture) => (
                            <VentureCard key={venture.id} venture={venture} isAdmin={currentUserId === venture.venturerById} />
                        ))}
                        {allVenturesOpenToCollaboration.length == 0 && !isAllVenturesOpenToCollaborationLoading && (
                            <Card className="text-center py-12">
                                <CardContent className="pt-6">
                                    <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                                    <CardTitle className="mb-2">No ventures found</CardTitle>
                                    <CardDescription className="mb-4">{`No ventures match the "${selectedTab}" filter.`}</CardDescription>
                                    <Link href="/ventures/create">
                                        <Button>
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create New Venture
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
