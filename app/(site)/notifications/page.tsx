"use client"

import { useNotifications } from '@/app/hooks/useNotifications';
import NotificationsList from '@/components/NotificationsList';
import { Card } from '@/components/ui/card';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function Notifications() {
    const limit = 15;

    const {
        allNotifications,
        isAllNotificationsLoading,
        fetchNextPage, hasNextPage, isFetchingNextPage,
        markAsRead

    } = useNotifications({ limit });

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
        const unreadIds = allNotifications
            .filter((notification) => !notification.isRead)
            .map((notification) => notification.id);

        if (unreadIds.length > 0) {
            const timeoutId = setTimeout(() => {
                handleMarkAsRead(unreadIds);
            }, 5000);


            return () => clearTimeout(timeoutId);
        }

    }, [inView, allNotifications]);

    console.log("All notifications", allNotifications)
    async function handleMarkAsRead(notificationIds: any) {
        try {
            await markAsRead({ notificationIds })

        } catch (error) {
            console.log("error while mark on read ", error)
        }
    }
    return (
        <div className='p-6 h-screen overflow-y-auto'>
            <h1 className='text-3xl font-bold mb-6'>Notifications</h1>
            <div className='flex flex-col gap-2 w-full'>
                {isAllNotificationsLoading ? (
                    [...Array(4)].map((_, i) => <Card key={i} className="animate-pulse h-15" />)
                ) : allNotifications.length === 0 ? (
                    <p className="text-center col-span-full text-sm text-muted-foreground mt-10">
                        No notifications
                    </p>
                ) : (
                    allNotifications.map((notification) =>
                        <NotificationsList
                            key={notification.id}
                            notification={notification}
                        />
                    ))}
            </div>
            {allNotifications.length > 0 && hasNextPage ? (
                <div ref={ref} aria-hidden="true" className="h-1 w-full">
                    <div className="text-center mt-5 text-sm">Loading...</div>
                </div>
            ) : (
                allNotifications.length > 0 &&
                <div className="text-center mt-5 text-sm">No more notifications</div>
            )}
        </div>
    )
}

export default Notifications