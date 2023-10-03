import React, { useState } from 'react'
import OrdersCardByStatus from './OrdersCardByStatus'
import MyDrawwer from '../../helpers/MyDrawwer'
import { orderCardArray } from './OrdersBody'
import { CheckIcon, ClockIcon, PasteIcon, RejectIcon, TrackIcon, UserIcon } from '../../helpers/Icons';
import { Button } from '@nextui-org/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// demo arrays 
const statusArray = [
  {
    title: 'Yangi',
    count: 4,
    color: 'global_green',
    amount: '12,230,000 UZS',
  },
  {
    title: 'Qabul qilingan',
    count: 2,
    color: '[#11ACFD]',
    amount: '12,000,000 UZS',
  },
  {
    title: 'Jo\'natilgan',
    count: 8,
    color: 'global_yellow',
    amount: '2,500,000 UZS',
  },
  {
    title: 'Yopilgan',
    count: 12,
    color: '[#8E007E]',
    amount: '10,230,000 UZS',
  },
];
const OrdersByAllStatus = () => {
  const [orderCardArrayState, setOrderCardArrayState] = useState(orderCardArray)

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const flex = searchParams.get("flex")
  const view = searchParams.get("view");
  const draggingId = searchParams.get("draggingId");
  const status = searchParams.get("status") || "Yangi";

  // drawwer item which card selected 
  const drawwerItem = orderCardArray.find(item => item.id === view) as OrderType

  const articleElement = document.getElementById('article');

  const handleClick = (item: OrderType) => {
    navigate(`?flex=${flex}&status=${status}&view=${item.id}`)
    if (articleElement) {
      articleElement.style.overflowY = "hidden";
    }
  }

  const handleCloseDrawwer = () => {
    navigate(`?flex=${flex}&status=${status}`)
    if (articleElement) {
      articleElement.style.overflowY = "auto";
    }
  }
  // drag and drop change status
  const handleDragStart = (id: string) => {
    navigate(`?flex=${flex}&status=${status}&draggingId=${id}`)
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: string) => {
    e.preventDefault();
    const updatedItems = orderCardArrayState.map((item) => {
      if (item.id === draggingId) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setOrderCardArrayState(updatedItems);
    navigate(-1)
  };

  function calculateTotalSum(delivery_sum: string, sum: string | any): number {
    const d_sum = Number(delivery_sum?.replace(",", "") || 0);
    const order_sum = Number(sum?.replaceAll(",", "") || 0);
    return d_sum + order_sum
  }
  const calculateTotalSumByStatus = (status_name: string) => {
    let total_sum = 0
    orderCardArrayState.filter(item => item.status === status_name).map(item => {
      total_sum += calculateTotalSum(item.delivery_sum, item.sum)
    })
    return total_sum.toLocaleString("en-US");
  }

  return (
    <React.Fragment>
      <div className="grid grid-rows-1 grid-cols-4 gap-[14px] py-[11px]">
        {
          statusArray.map(statusItem => <React.Fragment
            key={statusItem.title}>
            <div
              className="space-y-2"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, statusItem.title)}
            >
              <div className='flex items-center gap-3'>
                <p className='text-sm text-global_text_color/80 font-medium'>{statusItem.title}</p>
                <div className='text-center text-global_text_color text-xs bg-white p-[1px] px-2.5 rounded'>
                  <span>{orderCardArrayState.filter(item => item.status === statusItem.title).length}</span>
                </div>
              </div>
              <div className='w-full bg-white py-3 pl-4 pr-5 rounded-md flex items-center justify-between gap-[38px]'>
                <div className={`bg-${statusItem.color} p-1.5 rounded-full`}></div>
                <p className='text-global_text_color font-bold text-lg whitespace-nowrap'>{calculateTotalSumByStatus(statusItem.title)} UZS</p>
              </div>
              {
                orderCardArrayState.filter(item => item.status === statusItem.title)
                  .map(item => <OrdersCardByStatus
                    handleDragStart={handleDragStart}
                    key={item.id}
                    {...item}
                    handleClick={handleClick} />
                  )
              }
            </div>
          </React.Fragment>)
        }
      </div>
      <MyDrawwer mt={67.7} size="sm" isOpen={!!view} onClose={handleCloseDrawwer} >
        <div className='py-3 w-full h-full flex flex-col justify-between'>
          <div className='px-8 space-y-4'>
            <div className="flex items-center justify-between">
              <div className="bg-global_green px-3 py-[7px]  text-center rounded-[18px] w-[80px]">
                <span className="text-base font-medium text-white cursor-auto">{drawwerItem?.order_number}</span>
              </div>
              <div className="flex items-center w-24 justify-center gap-3">
                <ClockIcon />
                <span className="text-global_text_color text-base">{drawwerItem?.lastTime}</span>
              </div>
            </div>
            <div className='bg-global_silver/70 w-full p-5 rounded-md'>
              <div className=" gap-[14px] flex items-start">
                <div className='mt-2'>
                  <UserIcon />
                </div>
                <div>
                  <p className="text-lg font-medium whitespace-nowrap">
                    {drawwerItem?.user?.full_name}
                  </p>
                  <p className="text-base font-medium text-global_text_color/60">{drawwerItem?.user?.phone_number}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="cursor-auto">
                <p className="text-[11px] text-global_text_color/30">Operator:</p>
                <p className="text-sm font-semibold">{drawwerItem?.operator}</p>
              </div>
              <div>
                <p className="text-[11px] text-global_text_color/30">Filial:</p>
                <p className="text-sm font-semibold max-w-[110px]">{drawwerItem?.filial}</p>
              </div>
            </div>
            <hr className='pb-4' />
          </div>
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
          <div className='px-6'>
            <div className='bg-global_silver/70 w-full p-5 rounded-md mt-4 grid grid-cols-2 grid-rows-1 items-start '>
              <div className='flex items-center gap-2 w-full' >
                <PasteIcon />
                <p className='font-medium text-sm'>115,000 UZS</p>
              </div>
              <div className='flex flex-col items-center gap-1 w-full'>
                <div className="flex items-center gap-2">
                  <TrackIcon />
                  <p className='font-medium text-sm'>5,000 UZS</p>
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
    </React.Fragment >
  )
}

export default OrdersByAllStatus
