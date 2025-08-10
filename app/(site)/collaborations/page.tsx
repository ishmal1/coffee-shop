"use client"

import { useState } from "react"
import { trpc } from "@/server/client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function CollaborationsPage() {
    const sentRequests = trpc.collaboration.getSentRequests.useQuery()
    const receivedRequests = trpc.collaboration.getReceivedRequests.useQuery()
    const joinedVentures = trpc.collaboration.getJoinedVentures.useQuery()

    const acceptMutation = trpc.collaboration.acceptCollaborationRequest.useMutation()
    const rejectMutation = trpc.collaboration.rejectCollaborationRequest.useMutation()

    const [selectedTab, setSelectedTab] = useState("sent")
    const [loadingId, setLoadingId] = useState<string | null>(null);


    const utils = trpc.useContext()
    const onMutationSuccess = () => {
        utils.collaboration.getSentRequests.invalidate()
        utils.collaboration.getReceivedRequests.invalidate()
        utils.collaboration.getJoinedVentures.invalidate()
    }

    const handleAccept = async (requestId: string) => {
        try {
            setLoadingId(requestId);
            await acceptMutation.mutateAsync({ requestId })
            onMutationSuccess()
        } catch (error) {
            console.error("Accept error:", error)
        } finally {
            setLoadingId(null);
        }
    }

    const handleReject = async (requestId: string) => {
        try {
            setLoadingId(requestId);
            await rejectMutation.mutateAsync({ requestId })
            onMutationSuccess()
        } catch (error) {
            console.error("Reject error:", error)
        } finally {
            setLoadingId(null);
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">My Collaborations</h1>

            <Tabs defaultValue="sent" value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
                <TabsList>
                    <TabsTrigger value="sent">Sent Requests</TabsTrigger>
                    <TabsTrigger value="received">Received Requests</TabsTrigger>
                    <TabsTrigger value="joined">Joined Ventures</TabsTrigger>
                </TabsList>

                {/* Sent Requests Tab */}
                <TabsContent value="sent">
                    {sentRequests.isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="grid gap-4">
                            {sentRequests.data?.length === 0 ? (
                                <p>No collaboration requests sent yet.</p>
                            ) : (
                                sentRequests?.data?.map((req) => (
                                    <Card key={req.id}>
                                        <CardHeader>
                                            <CardTitle>{req.venture.name}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{req.venture.tagline}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-sm">
                                                Status: <Badge>{req.status}</Badge>
                                            </div>
                                            {req.roleRequested && <p className="text-sm mt-1">Role: {req.roleRequested}</p>}
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    )}
                </TabsContent>

                {/* Received Requests Tab */}
                <TabsContent value="received">
                    {receivedRequests.isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="grid gap-4">
                            {receivedRequests.data?.length === 0 ? (
                                <p>No collaboration requests received yet.</p>
                            ) : (
                                receivedRequests?.data?.map((req) => (
                                    <Card key={req.id} className="p-4 shadow-lg rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                {/* Avatar and Name */}
                                                <Avatar className="h-12 w-12">

                                                    <AvatarFallback>
                                                        {req.user.profile?.firstName?.[0]}{req.user.profile?.surname?.[0]}
                                                    </AvatarFallback>
                                                </Avatar>

                                                {/* User Info */}
                                                <div>
                                                    <h3 className="font-semibold text-lg">
                                                        {req.user.profile?.firstName} {req.user.profile?.surname}
                                                    </h3>
                                                    <p className="text-sm text-gray-600">{req.user.email}</p>
                                                    {req.roleRequested && (
                                                        <p className="text-sm text-gray-700 mt-1">Requested Role: {req.roleRequested}</p>
                                                    )}
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Joining Venture: <span className="font-semibold">{req.venture.name}</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {new Date(req.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Status and Actions */}
                                            <div className="flex items-center space-x-2">
                                                <Badge
                                                    variant={
                                                        req.status === "ACCEPTED"
                                                            ? "default"
                                                            : req.status === "PENDING"
                                                                ? "secondary"
                                                                : "destructive"
                                                    }
                                                >
                                                    {req.status}
                                                </Badge>

                                                {/* Action buttons for Pending Status */}
                                                {req.status === "PENDING" && (
                                                    <div className="flex space-x-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => handleAccept(req.id)}
                                                            disabled={acceptMutation.status === "pending" || rejectMutation.status === "pending"}
                                                            className="flex items-center space-x-1"
                                                        >
                                                            {acceptMutation.status === "pending" && loadingId === req.id ? "Accepting..." : "Accept"}
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="destructive"
                                                            onClick={() => handleReject(req.id)}
                                                            disabled={acceptMutation.status === "pending" || rejectMutation.status === "pending"}
                                                            className="flex items-center space-x-1"
                                                        >
                                                            {rejectMutation.status === "pending" && loadingId === req.id ? "Rejecting..." : "Reject"}
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            )}
                        </div>
                    )}
                </TabsContent>


                {/* Joined Ventures Tab */}
                <TabsContent value="joined">
                    {joinedVentures.isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="grid gap-4">
                            {joinedVentures.data?.length === 0 ? (
                                <p>You haven't joined any ventures yet.</p>
                            ) : (
                                joinedVentures?.data?.map((venture) => (
                                    <Card key={venture.id}>
                                        <CardHeader>
                                            <CardTitle>{venture.name}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{venture.tagline}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-sm">Your Role: {venture.role}</div>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}
