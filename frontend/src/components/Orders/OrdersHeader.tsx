// helpers
import { FilterIcon1, FilterIcon2, PlusIcon } from '../../helpers/Icons'
const OrdersHeader = () => {
    return (
        <nav className='h-[80px] bg-white flex items-center justify-between gap-2 border-l-2 border-global_silver '>
            <button className='rounded-none flex items-center justify-center gap-3 px-9 h-full  border-r-2 border-global_silver'>
                <div className='bg-global_green p-3 rounded-full'>
                    <PlusIcon />
                </div>
                <p className='text-global_text_color text-xs font-semibold text-left'>Yangi buyurtma <br /> 
                    qo’shish</p>
            </button>
            <div className=' pr-2 h-full flex items-center whitespace-nowrap'>
                <div className='bg-global_silver h-[48] rounded-3xl p-[6px]  space-x-1'>
                    <button className='bg-white px-12 py-[5px] rounded-3xl'>
                        <span className='text-[14px]'>Yangi</span>
                    </button>
                    <button className=' px-12 py-[5px] rounded-3xl'>
                        <span className='text-[14px] text-global_text_color/60'>Qabul qilingan</span>
                    </button>
                    <button className=' px-12 py-[5px] rounded-3xl'>
                        <span className='text-[14px] text-global_text_color/60'>Jo’natilgan</span>
                    </button>
                    <button className=' px-12 py-[5px] rounded-3xl'>
                        <span className='text-[14px] text-global_text_color/60'>Yopilgan</span>
                    </button>
                </div>
            </div>
            <div className='border-l-2 border-global_silver h-full flex items-center px-2'>
                <div className='flex items-center justify-center gap-1.5 bg-global_silver p-[6px] rounded-3xl'>
                    <div className="p-3 bg-white rounded-3xl">
                        <FilterIcon1 />
                    </div>
                    <div className="p-3 bg-transparent rounded-3xl">

                        <FilterIcon2 />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default OrdersHeader
