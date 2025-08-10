"use client";

import { trpc } from "@/server/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react"
import { MoreHorizontal } from "lucide-react";
import VentureCard from "@/components/ventureCard";

export default function MyVenturesPage() {
    const router = useRouter();
    const utils = trpc.useUtils();
    const { data, isLoading, error } = trpc.venture.getByUserId.useQuery();
    const { data: session } = useSession()
    const currentUserId = session?.user?.id;



    useEffect(() => {
        if (error?.data?.code === "UNAUTHORIZED") {
            router.push("/login");
        }
    }, [error, router]);

    if (isLoading) return <div>Loading your ventures...</div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;

    const ventures = data?.userVentures || [];

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">My Ventures</h1>
                <Button onClick={() => router.push("/ventures/create")}>
                    Create New Venture
                </Button>
            </div>

            {ventures.length === 0 ? (
                <Card className="p-4 text-center">
                    <p className="text-gray-500">You haven’t created any ventures yet.</p>
                    <Button className="mt-4" onClick={() => router.push("/ventures/create")}>
                        Create Your First Venture
                    </Button>
                </Card>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ventures.map((venture) => (
                        <div key={venture.id} className="relative group">
                            <VentureCard
                                key={venture.id}
                                venture={venture}
                                isAdmin={currentUserId === venture.venturerById}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
