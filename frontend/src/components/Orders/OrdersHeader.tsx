// react 
import React from "react";
import { useEffect } from 'react'

// components from next ui
import { Button } from '@nextui-org/react'

// helpers
import { FilterIcon1, FilterIcon2, PlusIcon, TrashIcon, UserPlusIcon, } from '../../helpers/Icons'

// react router dom
import { useNavigate, useSearchParams } from 'react-router-dom';
import MyDrawwer from "../../helpers/MyDrawwer";
import ProductCard from "./ProductCard";
import PhoneInput from "react-phone-input-2";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// images
import PlacemarkIcon from '/assets/images/map_pin.svg'
// demo arrays 
const statusArray = [
    "Yangi", "Qabul qilingan", "Jo'natilgan", "Yopilgan"
]
const categoriesArray = [
    "Burger", "Lavash", "Garniyer", "Salatlar", "Ichimliklar", "Sous"
]
const OrdersHeader = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const flex = searchParams.get("flex") || "col";
    const status = searchParams.get("status") || "Yangi";
    // states
    const [drawwerVisible, setDrawwerVisible] = React.useState(false);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const changeViewStatus = (flex: string) => {
        navigate(`?flex=${flex}&status=${status}`)
    }
    const changeStatus = (status: string) => {
        navigate(`?flex=${flex}&status=${status}`)
    }
    const changeCategory = (selectedCategory: string) => {
        const findedIndex = categoriesArray.indexOf(selectedCategory)
        setSelectedCategoryIndex(findedIndex)
    }

    // toggleDrawer 
    const toggleDrawer = (status: boolean) => (setDrawwerVisible(status))
    useEffect(() => {
        if (flex !== "row" && flex !== "col") {
            navigate(-1);
        } else if (!statusArray.includes(status)) {
            navigate(`?flex=${flex}&status=Yangi`)
        } else {
            navigate(`?flex=${flex}&status=${status}`)
        }
    }, [flex, status]);

    return (
        <React.Fragment>
            <nav className='h-[80px] bg-white flex items-center justify-between gap-2 border-l-2 border-global_silver '>
                <Button onClick={() => toggleDrawer(true)} className='rounded-none flex items-center justify-center bg-transparent gap-3 !px-9 h-full min-w-[219px]  border-r-2 border-global_silver'>
                    <div className='bg-global_green p-3 rounded-full'>
                        <PlusIcon />
                    </div>
                    <p className='text-global_text_color text-xs font-semibold text-left'>Yangi buyurtma <br />
                        qo’shish</p>
                </Button>
                <div className=' pr-2 h-full w-full max-w-5xl flex items-center  whitespace-nowrap'>
                    <div className={` ${flex === "row" && 'opacity-40'}  flex items-center justify-between w-full  bg-global_silver h-[48] rounded-3xl p-[6px]   space-x-1`}>
                        {
                            statusArray.map((item: string, index: number) => <Button key={index} onClick={() => changeStatus(item)} disabled={flex === "row"} className={`${status === item ? 'bg-white shadow-md' : 'bg-transparent'}  w-full py-[5px] rounded-3xl `}>
                                <span className='text-[14px]'>{item}</span>
                            </Button>)
                        }
                    </div>
                </div>
                <div className='border-l-2 justify-center border-global_silver h-full flex items-center px-2'>
                    <div className='flex items-center justify-center gap-1.5 bg-global_silver p-[6px] rounded-3xl'>
                        <Button isIconOnly className={`${flex === "col" ? 'bg-white' : 'bg-transparent'}  rounded-3xl p-3`} onClick={() => changeViewStatus('col')}>
                            <FilterIcon1 />
                        </Button>
                        <Button isIconOnly className={`${flex === "row" ? 'bg-white' : "bg-transparent"} rounded-3xl p-3`} onClick={() => changeViewStatus('row')}>
                            <FilterIcon2 />
                        </Button>
                    </div>
                </div>

            </nav>
            {/* Add order  */}
            <MyDrawwer mt={80} isOpen={drawwerVisible} size="md" onClose={() => toggleDrawer(false)}>
                <div className="pt-4 flex h-full items-start justify-between">
                    <div className="space-y-[19px] px-4 w-full">
                        <h1 className="font-semibold text-base text-global_text_color">Yangi buyurtma qo'shish</h1>
                        <div className={`w-full bg-global_silver rounded-3xl p-1 flex items-center `}>
                            {
                                categoriesArray.map((item: string, index: number) => <Button key={index} onClick={() => changeCategory(item)} className={`${selectedCategoryIndex === index ? 'bg-white shadow-md' : 'bg-transparent'} w-full  px-0  h-[35px] rounded-3xl `}>
                                    <span className='text-[13px]'>{item}</span>
                                </Button>)
                            }
                        </div>
                        <div className="grid grid-cols-2 content-start gap-2 px-0.5 h-[calc(100vh-210px)] overflow-y-auto">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                    <div className="w-full p-1 overflow-y-auto h-[calc(100vh-99.1px)] space-y-1">
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-base text-global_text_color">Buyurtma ro'yxati</h1>
                            <Button isIconOnly className="rounded-full bg-global_silver">
                                <TrashIcon />
                            </Button>
                        </div>
                        <div className="border mt-1.5 rounded-md p-4 h-[263px] gap-4 flex flex-col justify-between ">
                            <div className="grid grid-cols-2 overflow-y-auto max-h-[calc(263px-68px)] ">
                                <ul className="space-y-0.5">
                                    <li className="text-global_text_color text-sm font-medium">Shaurma o’rtacha</li>
                                    <li className="text-global_text_color text-sm font-medium">Klab sendwich</li>
                                    <li className="text-global_text_color text-sm font-medium">Coca-Cola 1,5</li>
                                </ul>
                                <ul className="text-center space-y-0.5">
                                    <li className="text-global_text_color text-sm font-medium">4*15,000 UZS</li>
                                    <li className="text-global_text_color text-sm font-medium">2*23,000 UZS</li>
                                    <li className="text-global_text_color text-sm font-medium">1*9,000 UZS</li>
                                </ul>
                            </div>
                            <div className="bg-global_silver/60 p-3 rounded-md">
                                <p className="text-global_text_color/60 text-[11px]">Umumiy summa</p>
                                <p className="text-global_text_color text-xl"><span className="font-semibold">120,000 </span>UZS</p>
                            </div>
                        </div>
                        <div className=" space-y-2 ">
                            <div className="space-y-[5px]">
                                <label htmlFor="full_name_input" className="text-global_text_color/60 text-xs">Mijoz ismi</label>
                                <div className="flex items-center h-full border rounded-md">
                                    <input type="text" id="full_name_input" className="py-3 pl-5 rounded-l-md w-full outline-none text-global_text_color text-xs" />
                                    <div className=" border-l p-[14px] rounded-none bg-transparent">
                                        <UserPlusIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-[5px]">
                                <label htmlFor="full_name_input" className="text-global_text_color/60 text-xs">Telefon raqam</label>
                                <div className="flex items-center h-full border rounded-md">
                                    <PhoneInput
                                        country={'uz'}
                                        disableDropdown
                                        placeholder="+998 91 123 45 67"
                                    />
                                </div>
                            </div>
                            <div className="space-y-[5px]">
                                <label htmlFor="full_name_input" className="text-global_text_color/60 text-xs">Manzil</label>
                                <div className="flex items-center h-full border rounded-md">
                                    <input type="text" id="full_name_input" className="py-3 pl-5 rounded-l-md w-full outline-none text-global_text_color text-xs" />
                                </div>
                            </div>
                            <div className="border h-32 rounded-md">
                                <YMaps>
                                    <Map className="w-full h-full " defaultState={{
                                        center: [41.311081, 69.240562],
                                        zoom: 5
                                    }}>
                                        <Placemark
                                            options={{
                                                iconLayout: "default#image",
                                                iconImageHref: PlacemarkIcon,
                                                iconImageSize: [32, 32],
                                            }} geometry={[41.311081, 69.240562]} />
                                    </Map>
                                </YMaps>
                            </div>
                            <Button className="bg-global_green rounded-md text-white text-sm w-[118px]">
                                Saqlash
                            </Button>
                        </div>
                    </div>
                </div>
            </MyDrawwer>
        </React.Fragment >
    )
}

export default OrdersHeader
