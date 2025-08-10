"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { usePeople } from "@/app/hooks/usePeople";
import { PeopleCard } from "@/components/people/PeopleCard";
import { useInView } from "react-intersection-observer";

export default function PeoplePage() {
    const limit = 9;

    const {
        allPeople,
        isAllPeopleLoading,
        fetchNextPage, hasNextPage, isFetchingNextPage,
        myConnections,
        isMyConnectionsLoading,
        pendingReceivedRequests,
        isPendingReceivedLoading,
        pendingSentRequests,
        isPendingSentLoading,
    } = usePeople({ limit });

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return (
        <div className="p-6 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">People</h1>

            {/* Outer Tabs: All / My Network */}
            <Tabs defaultValue="all" className="w-full mb-6">
                <TabsList>
                    <TabsTrigger value="all">All ({isAllPeopleLoading ? "..." : allPeople.length})</TabsTrigger>
                    <TabsTrigger value="network">My Network</TabsTrigger>
                </TabsList>

                {/* All People Tab */}
                <TabsContent value="all"

                >
                    <div className=" mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {isAllPeopleLoading ? (
                            [...Array(9)].map((_, i) => <Card key={i} className="animate-pulse h-64 w-xs" />)
                        ) : allPeople.length === 0 ? (
                            <p className="text-center col-span-full text-muted-foreground mt-10">
                                No people found.
                            </p>
                        ) : (
                            allPeople.map((person) => (
                                <PeopleCard key={person.id} person={person} showConnectButton />
                            ))

                        )}
                    </div>

                    {hasNextPage ?
                        <div
                            ref={ref}
                            aria-hidden="true"
                            className="h-1 w-full"
                        >

                            <div className="text-center mt-5">Loading..</div> :

                        </div>
                        : <div className="text-center mt-5">No more People</div>
                    }

                </TabsContent>

                {/* My Network Tab with Inner Tabs */}
                <TabsContent value="network" className="mt-6">
                    <Tabs defaultValue="connections" className="w-full">
                        <TabsList>
                            <TabsTrigger value="connections">
                                Connections ({isMyConnectionsLoading ? "..." : myConnections.length})
                            </TabsTrigger>
                            <TabsTrigger value="pending">
                                Pending ({isPendingReceivedLoading ? "..." : pendingReceivedRequests.length})
                            </TabsTrigger>
                            <TabsTrigger value="sent">
                                Sent ({isPendingSentLoading ? "..." : pendingSentRequests.length})
                            </TabsTrigger>
                        </TabsList>

                        {/* Connections */}
                        <TabsContent
                            value="connections"
                            className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {isMyConnectionsLoading ? (
                                [...Array(4)].map((_, i) => <Card key={i} className="animate-pulse h-32" />)
                            ) : myConnections.length === 0 ? (
                                <p className="text-center col-span-full text-muted-foreground mt-10">
                                    You have no connections yet.
                                </p>
                            ) : (
                                myConnections.map((person) => (
                                    <PeopleCard
                                        key={person.id}
                                        person={person}
                                        showRemoveButton
                                    />
                                ))
                            )}
                        </TabsContent>

                        {/* Pending */}
                        <TabsContent
                            value="pending"
                            className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {isPendingReceivedLoading ? (
                                [...Array(4)].map((_, i) => <Card key={i} className="animate-pulse h-32" />)
                            ) : pendingReceivedRequests.length === 0 ? (
                                <p className="text-center col-span-full text-muted-foreground mt-10">
                                    No pending connection requests.
                                </p>
                            ) : (
                                pendingReceivedRequests.map(({ id, sender }) => (
                                    <PeopleCard
                                        key={sender.id}
                                        person={sender}
                                        showAcceptRejectButtons
                                    />
                                ))
                            )}
                        </TabsContent>

                        {/* Sent */}
                        <TabsContent
                            value="sent"
                            className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {isPendingSentLoading ? (
                                [...Array(4)].map((_, i) => <Card key={i} className="animate-pulse h-32" />)
                            ) : pendingSentRequests.length === 0 ? (
                                <p className="text-center col-span-full text-muted-foreground mt-10">
                                    No sent connection requests.
                                </p>
                            ) : (
                                pendingSentRequests.map(({ id, receiver }) => (
                                    <PeopleCard
                                        key={receiver.id}
                                        person={receiver}
                                    />
                                ))
                            )}
                        </TabsContent>
                    </Tabs>
                </TabsContent>
            </Tabs>
        </div>
    );
}
