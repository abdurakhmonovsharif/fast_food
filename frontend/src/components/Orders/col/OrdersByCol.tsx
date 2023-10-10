import React from 'react'
import { useDeleteOrderMutation, useGetOrderByColumsQuery, useUpdateOrderMutation } from '../../../redux/rtq/orders.api'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';
import ColCard from './ColCard';
import { orderStatuses } from '../OrdersBody';

function OrdersByCol() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status") || "pending";
    const page = searchParams.get("page") || "1";
    const flex = searchParams.get("flex") || "col";
    let size = "10";
    React.useEffect(() => {
        navigate(`?flex=${flex}&status=${status}&page=${page}`)
    }, [])
    const { data, isLoading, refetch } = useGetOrderByColumsQuery({ status: status.toUpperCase(), page, size }, { refetchOnMountOrArgChange: flex === "col" });
    // delete col card
    const [deleteRowCard] = useDeleteOrderMutation()
    const handleDelete = (id: string | undefined) => {
        if (id)
            deleteRowCard({ id }).then(() => {
                refetch()
            })
    }
    // update status col card to next status
    const [updateOrderCard] = useUpdateOrderMutation()
    const handleUpdate = (orderId: string | undefined) => {
        const statusKeys = Object.keys(orderStatuses);
        const newStatus = statusKeys[statusKeys.indexOf(status) + 1];
        if (orderId)
            updateOrderCard({ orderId, status: newStatus.toUpperCase() }).then(() => refetch())
    }
    return (
        <div className='h-full overflow-y-auto w-full px-10 flex flex-col items-center justify-normal space-y-2.5'>
            {
                isLoading ?
                    <Spinner className='w-full h-full' size='lg' color='success' /> :
                    !data?.data.empty ? data?.data?.content?.map(item => <ColCard
                        handleDelete={() => handleDelete(item.id)}
                        handleUpdateStatus={() => handleUpdate(item.id)}
                        key={item.id} {...item} />) :
                        <div className='w-full h-full'>
                            <p className='text-global_text_color text-lg text-center'>Ma'lumot topilmadi</p>
                        </div>
            }
        </div>
    )
}

export default OrdersByCol