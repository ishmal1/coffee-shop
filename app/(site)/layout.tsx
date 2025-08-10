import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <>


            <SidebarProvider>

                <AppSidebar />

                <div className="w-full">{children}</div>

            </SidebarProvider>
        </>
    );
}