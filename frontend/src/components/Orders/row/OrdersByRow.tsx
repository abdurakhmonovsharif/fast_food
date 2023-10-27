import React, { useState } from 'react'
import MyDrawwer from '../../../helpers/MyDrawwer'
import { CheckIcon, ClockIcon, PasteIcon, RejectIcon, TrackIcon, UserIcon } from '../../../helpers/Icons';
import { Button, Spinner } from '@nextui-org/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RowCard from './RowCard';
import { useGetOrderByRowQuery, useUpdateOrderMutation } from '../../../redux/rtq/orders.api';
import { orderStatuses } from '../OrdersBody';
import QuestionerModal from '../../../helpers/QuestionerModal';

const OrdersByRow = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const flex = searchParams.get("flex")
  const view = searchParams.get("view");
  const dragging = searchParams.get("dragging") || "false";
  const [updatedingItem, setUpdatedingItem] = useState<OrderType | null>(null)
  const [visibleQuestionerModal, setVisibleQuestionerModal] = useState(false)
  const [nextStatus, setNextStatus] = useState<{ label: string, key: string | undefined } | null>(null)
  // drawwer item which card selected 
  const [drawwerItem, setDrawwerItem] = useState<OrderType | null>(null)

  const articleElement = document.getElementById('article');

  // drawwer actions
  const handleOpenDrawwer = (item: OrderType) => {
    setDrawwerItem(item)
    navigate(`?flex=${flex}&view=${item.id}`)
    if (articleElement) {
      articleElement.style.overflowY = "hidden";
    }
  }
  const handleCloseDrawwer = () => {
    navigate(-1)
    if (articleElement) {
      articleElement.style.overflowY = "auto";
    }
  }
  const agreeToChangeStatus = () => {
    handlaUpdate()
  }
  // open Questioner Modal
  const openQuestionerModal = (order?: OrderType, status?: { label: string, key: string }) => {
    if (order && status) {
      const statusValues = Object.values(orderStatuses);
      setUpdatedingItem(order);
      const statusKeys = Object.keys(orderStatuses);
      if (dragging === "true") {
        setNextStatus(status);
      } else {
        setNextStatus(statusValues[statusKeys.indexOf(status.key) + 1])
      }
      setUpdatedingItem(order);
      setVisibleQuestionerModal(true)
    }
  }
  // update rowCard status to cenceled like delete
  const handleDelete = (id: string | undefined) => {
    if (id)
      updateOrderCard({ orderId: id, status: "CANCELED" }).then(() => refetch())

  }
  // update after drop row card and update with button click
  const [updateOrderCard] = useUpdateOrderMutation()
  const onDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: { label: string, key: string }) => {
    e.preventDefault();
    if (updatedingItem?.id)
      openQuestionerModal(updatedingItem, newStatus)
  };
  const handlaUpdate = () => {
    const orderId = updatedingItem?.id;
    if (orderId && nextStatus?.key)
      updateOrderCard({ orderId, status: nextStatus?.key?.toUpperCase() }).then(() => {
        navigate(`?flex=${flex}`)
        setUpdatedingItem(null);
        setNextStatus(null)
        refetch()
      })
  }
  // drag and drop change status
  const handleDragStart = (item: OrderType) => {
    setUpdatedingItem(item);
    navigate(`?flex=${flex}&&dragging=true`)
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  // calculate total sum 
  function calculateTotalSum(shippingCost: number, orderCost: number): number {
    if (shippingCost && orderCost) {
      const total_sum = shippingCost + orderCost;
      return total_sum
    }
    return 0
  }
  const calculateTotalSumByStatus = (status_name: string) => {
    let total_sum = 0
    entriesData?.filter((item: any) => item[0] === status_name)[0][1].map((item: any) => {
      total_sum += calculateTotalSum(item.shippingCost, item.orderCost)
    })

    return total_sum.toLocaleString("en-US");
  }
  // get orderByColums
  const { data, isLoading, refetch } = useGetOrderByRowQuery();
  const entriesData: any = data && Object.entries(data.data);
  const entriesStatuses = Object.entries(orderStatuses);
  const filteredRowCardsArray = (status_name: string): OrderType[] => {
    const filterdArray = entriesData?.filter((item: any) => item[0] === status_name)[0][1]
    return filterdArray ? filterdArray : []
  }
  return (
    <React.Fragment>
      {
        isLoading ?
          <Spinner size='lg' color='success' className='w-full h-full' />
          :
          <div className="grid grid-rows-1 grid-cols-4 gap-[14px] py-[11px] px-10 overflow-y-auto  h-full">
            {
              entriesStatuses.map(statusItem => statusItem[1].key != "canceled" && <React.Fragment
                key={statusItem[1].label}>
                <div
                  className="space-y-2 "
                  onDragOver={(e) => onDragOver(e)}
                  onDrop={(e) => onDrop(e, statusItem[1])}
                >
                  <div className='flex items-center gap-3'>
                    <p className='text-sm text-global_text_color/80 font-medium'>{statusItem[1].label}</p>
                    <div className='text-center text-global_text_color text-xs bg-white p-[1px] px-2.5 rounded'>
                      <span>{filteredRowCardsArray(statusItem[1].key)?.length}</span>
                    </div>
                  </div>
                  <div className='w-full bg-white py-3 pl-4 pr-5 rounded-md flex items-center justify-between gap-[38px]'>
                    <div className={`bg- p-1.5 rounded-full`}></div>
                    <p className='text-global_text_color font-bold text-lg whitespace-nowrap'>{calculateTotalSumByStatus(statusItem[1].key)} UZS</p>
                  </div>
                  {
                    filteredRowCardsArray(statusItem[1].key).map((item) => <RowCard
                      key={item.id}
                      handleUpdateStatus={() => openQuestionerModal(item, { label: statusItem[1].label, key: statusItem[1].key })}
                      handleDragStart={() => handleDragStart(item)}
                      handleDelete={() => handleDelete(item.id)}
                      handleClick={handleOpenDrawwer} {...item} currentOrderStatus={statusItem[1].key} />)
                  }
                </div>
              </React.Fragment>)
            }
          </div>
      }
      {/* row card items */}
      <MyDrawwer mt={67.7} size="sm" isOpen={!!view} onClose={handleCloseDrawwer} >
        <div className='py-3 w-full h-full flex flex-col justify-between'>
          <div className=' space-y-4'>
            <div className="flex items-center justify-between px-8">
              <div className="bg-global_green px-3 py-[7px]  text-center rounded-[18px] w-[80px]">
                <span className="text-base font-medium text-white cursor-auto">{drawwerItem?.orderNumber}</span>
              </div>
              <div className="flex items-center w-24 justify-center gap-3">
                <ClockIcon />
                <span className="text-global_text_color text-base">{'00:01'}</span>
              </div>
            </div>
            <div>

              <div className="px-8 space-y-4">
                <div className='bg-global_silver/70 w-full p-5 rounded-md '>
                  <div className=" gap-[14px] flex items-start">
                    <div className='mt-2'>
                      <UserIcon />
                    </div>
                    <div>
                      <p className="text-lg font-medium whitespace-nowrap">
                        {drawwerItem?.customer.name}
                      </p>
                      <p className="text-base font-medium text-global_text_color/60">{drawwerItem?.customer?.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="cursor-auto">
                    <p className="text-[11px] text-global_text_color/30">Operator:</p>
                    <p className="text-sm font-semibold">{drawwerItem?.operator.name}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-global_text_color/30">Filial:</p>
                    <p className="text-sm font-semibold max-w-[110px]">{drawwerItem?.branch?.nameUz}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className='bg-global_silver/70 px-8 border-b-2'>
                <div className='grid grid-rows-1 grid-cols-2 w-full py-2'>
                  <div>
                    <p className='uppercase text-[10px] font-semibold text-global_text_color/30'>Maxsulotlar</p>
                  </div>
                  <div className='text-center'>
                    <p className='uppercase text-[10px] font-semibold text-global_text_color/30'>Soni | narxi</p>
                  </div>
                </div>
              </div>
              <div className='grid grid-rows-1 grid-cols-2 w-full py-1 px-8 overflow-y-auto max-h-[100px] 2xl:max-h-none'>
                <ul className='text-sm font-medium text-global_text_color space-y-1 mt-0.5'>
                  <li>Shaurma o’rtacha</li>
                  <li>Klab sendwich</li>
                  <li>Coca-Cola 1,5</li>
                </ul>
                <ul className='text-sm pl-7 font-medium text-global_text_color space-y-1 mt-0.5'>
                  <li><span className='font-semibold'>4*15,000</span> UZS</li>
                  <li><span className='font-semibold'>2*23,000</span> UZS</li>
                  <li><span className='font-semibold'>1*9,000</span> UZS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='px-6'>
            <div className='bg-global_silver/70 w-full p-5 rounded-md mt-4 grid grid-cols-2 grid-rows-1 items-start '>
              <div className='flex items-center gap-2 w-full' >
                <PasteIcon />
                <p className='font-medium text-sm'>{drawwerItem?.orderCost?.toLocaleString("en-US")} UZS</p>
              </div>
              <div className='flex flex-col items-center gap-1 w-full'>
                <div className="flex items-center gap-2">
                  <TrackIcon />
                  <p className='font-medium text-sm'>{drawwerItem?.shippingCost?.toLocaleString("en-US")} UZS</p>
                </div>
                <div className="flex justify-start items-center gap-2 w-[55%]">
                  <div className="bg-[#14E5E4] p-1.5 rounded-full"></div>
                  <p className="text-xs">Payme</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-4">
              <Button isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                <RejectIcon />
              </Button>
              <Button isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                <CheckIcon />
              </Button>
            </div>
          </div>
        </div>
      </MyDrawwer>
      {/* questioner modal */}
      <QuestionerModal isOpen={visibleQuestionerModal} onClose={() => setVisibleQuestionerModal(false)} ifAgree={agreeToChangeStatus}>
        <h1 className='text-global_text_color text-lg  p-2'>
          <span className='font-semibold'> {updatedingItem?.customer.name}</span> ga tegishli {" "}
          {updatedingItem?.orderNumber} raqamli buyurtmani statusini <span className='font-semibold'>{nextStatus?.label}</span>  statusiga o'zgartirasizmi ?
        </h1>
      </QuestionerModal>
    </React.Fragment >
  )
}

export default OrdersByRow
