import { Metadata } from "next";
import ChatComponent from "@/components/chat";

export const metadata: Metadata = {
    title: "Chat - VentureCell",
    description: "Chat with your connections",
};

export default function Chat() {
    return <ChatComponent />;
}