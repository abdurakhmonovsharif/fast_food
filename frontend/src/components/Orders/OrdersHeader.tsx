// react 
import React, { useState } from "react";
import { useEffect } from 'react'
// components from next ui
import { Button } from '@nextui-org/react'

// drawwer
import Drawer from 'react-modern-drawer'

// helpers
import { FilterIcon1, FilterIcon2, PlusIcon } from '../../helpers/Icons'

// react router dom
import { useNavigate, useSearchParams } from 'react-router-dom';

// demo arrays 
const statusArray = [
    "Yangi", "Qabul qilingan", "Jo'natilgan", "Yopilgan"
]
const OrdersHeader = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const view = searchParams.get("view") || "row";
    const status = searchParams.get("status") || "Yangi";
    // states
    const [isOpen, setIsOpen] = useState(false)

    const changeViewStatus = (view: string) => {
        navigate(`?view=${view}&status=${status}`)
    }
    const changeStatus = (status: string) => {
        navigate(`?view=${view}&status=${status}`)
    }

    // toggleDrawer 
    const toggleDrawer = (status: boolean) => setIsOpen(status)
    useEffect(() => {
        if (view !== "row" && view !== "col") {
            navigate(-1);
        } else if (!statusArray.includes(status)) {
            navigate(`?view=${view}&status=Yangi`)
        } else {
            navigate(`?view=${view}&status=${status}`)
        }
    }, [view, status]);
    return (
        <React.Fragment>
            <nav className='h-[80px] bg-white flex items-center justify-between gap-2 border-l-2 border-global_silver '>
                <Button onClick={() => toggleDrawer(true)} className='rounded-none flex items-center justify-center bg-transparent gap-3 px-9 h-full  border-r-2 border-global_silver'>
                    <div className='bg-global_green p-3 rounded-full'>
                        <PlusIcon />
                    </div>
                    <p className='text-global_text_color text-xs font-semibold text-left'>Yangi buyurtma <br />
                        qo’shish</p>
                </Button>
                <div className=' pr-2 h-full flex items-center whitespace-nowrap'>
                    <div className={` ${view === "col" && 'opacity-40'}  bg-global_silver h-[48] rounded-3xl p-[6px]  space-x-1`}>
                        {
                            statusArray.map((item: string, index: number) => <Button key={index} onClick={() => changeStatus(item)} disabled={view === "col"} className={`${status === item ? 'bg-white shadow-md' : 'bg-transparent'}  px-12 py-[5px] rounded-3xl `}>
                                <span className='text-[14px]'>{item}</span>
                            </Button>)
                        }
                    </div>
                    <div className="font"></div>
                </div>
                <div className='border-l-2 justify-center border-global_silver h-full flex items-center px-2'>
                    <div className='flex items-center justify-center gap-1.5 bg-global_silver p-[6px] rounded-3xl'>
                        <Button isIconOnly className={`${view === "row" ? 'bg-white' : 'bg-transparent'}  rounded-3xl p-3`} onClick={() => changeViewStatus('row')}>
                            <FilterIcon1 />
                        </Button>
                        <Button isIconOnly className={`${view === "col" ? 'bg-white' : "bg-transparent"} rounded-3xl p-3`} onClick={() => changeViewStatus('col')}>
                            <FilterIcon2 />
                        </Button>
                    </div>
                </div>

            </nav>

        </React.Fragment>
    )
}

export default OrdersHeader
