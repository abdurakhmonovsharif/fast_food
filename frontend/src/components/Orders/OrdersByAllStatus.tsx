import OrdersCardByStatus from './OrdersCardByStatus'

const OrdersByAllStatus = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-4 gap-[14px] py-[11px]">
      <div className="space-y-2">
        <div className='flex items-center gap-3'>
          <p className='text-sm text-global_text_color/80 font-medium'>Yangi</p>
          <div className='text-center text-global_text_color text-xs bg-white p-[1px] px-2.5 rounded'>
            <span>4</span>
          </div>
        </div>
        <div className='w-full bg-white py-3 pl-4 pr-5 rounded-md flex items-center justify-between gap-[38px]'>
          <div className="bg-global_green p-1.5 rounded-full"></div>
          <p className='text-global_text_color font-bold text-lg whitespace-nowrap'>12,230,000 UZS</p>
        </div>
        <OrdersCardByStatus />
        <OrdersCardByStatus />
      
      </div>
      <div className="space-y-2">
        <div className='flex items-center gap-3'>
          <p className='text-sm text-global_text_color/80 font-medium'>Qabul qilingan</p>
          <div className='text-center text-global_text_color text-xs bg-white p-[1px] px-2.5 rounded'>
            <span>2</span>
          </div>
        </div>
        <div className='w-full bg-white py-3 pl-4 pr-5 rounded-md flex items-center justify-between gap-[38px]'>
          <div className="bg-[#11ACFD] p-1.5 rounded-full"></div>
          <p className='text-global_text_color font-bold text-lg whitespace-nowrap'>12,000,000 UZS</p>
        </div>
        <OrdersCardByStatus />
      </div>
      <div className="space-y-2">
        <div className='flex items-center gap-3'>
          <p className='text-sm text-global_text_color/80 font-medium'>Jo'natilgan</p>
          <div className='text-center text-global_text_color text-xs bg-white p-[1px] px-2.5 rounded'>
            <span>8</span>
          </div>
        </div>
        <div className='w-full bg-white py-3 pl-4 pr-5 rounded-md flex items-center justify-between gap-[38px]'>
          <div className="bg-global_yellow p-1.5 rounded-full"></div>
          <p className='text-global_text_color font-bold text-lg whitespace-nowrap'>2,500,000 UZS</p>
        </div>
        <OrdersCardByStatus />
        <OrdersCardByStatus />
      </div>
      <div className="space-y-2">
        <div className='flex items-center gap-3'>
          <p className='text-sm text-global_text_color/80 font-medium'>Yopilgan</p>
          <div className='text-center text-global_text_color text-xs bg-white p-[1px] px-2.5 rounded'>
            <span>12</span>
          </div>
        </div>
        <div className='w-full bg-white py-3 pl-4 pr-5 rounded-md flex items-center justify-between gap-[38px]'>
          <div className="bg-[#8E007E] p-1.5 rounded-full"></div>
          <p className='text-global_text_color font-bold text-lg whitespace-nowrap'>10,230,000 UZS</p>
        </div>
        <OrdersCardByStatus />
        <OrdersCardByStatus />
      </div>
    </div>
  )
}

export default OrdersByAllStatus
