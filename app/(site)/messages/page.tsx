import MessagesPage from "@/components/Messages";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Messages - VentureCell",
    description: "Connect and chat with other users",
};

export default function Messages() {
    return (
        <div className="p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Messages</h1>
                </div>
            </div>
            <div className=" flex items-center justify-center">
                <MessagesPage />

            </div>
        </div >

    );
}
