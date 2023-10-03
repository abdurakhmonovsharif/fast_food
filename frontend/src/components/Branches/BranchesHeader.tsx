import React from 'react'

// next ui
import { Button } from '@nextui-org/react';
// helpers
import { PlusIcon, SearchIcon } from '../../helpers/Icons';
import MyDrawwer from '../../helpers/MyDrawwer'

// yandex maps
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';

// images
import PlacemarkIcon from '/assets/images/map_pin.svg'

const BranchesHeader = () => {
    // states
    const [drawwerVisible, setDrawwerVisible] = React.useState(false);
    // toggleDrawer 
    const toggleDrawer = (status: boolean) => setDrawwerVisible(status);
    return (
        <nav className='h-[80px]  bg-white flex items-center justify-start gap-2 border-l-2 border-global_silver '>
            <Button onClick={() => toggleDrawer(true)} className='rounded-none flex items-center justify-center bg-transparent gap-3 px-9 h-full  border-r-2 border-global_silver'>
                <div className='bg-global_green p-3 rounded-full'>
                    <PlusIcon />
                </div>
                <p className='text-global_text_color text-xs font-semibold text-left'>Yangi kategoriya <br />
                    qo’shish</p>
            </Button>
            <div className='flex items-center h-full gap-5 pl-12'>
                <div className='bg-global_silver w-[300px] p-4 rounded-full flex items-center justify-between '>
                    <input type="text" className='bg-transparent w-full h-full outline-none text-global_text_color/60 text-[13px]' placeholder='Qidirish' />
                    <SearchIcon />
                </div>
            </div>
            <MyDrawwer mt={80} isOpen={drawwerVisible} size="sm" onClose={() => toggleDrawer(false)}>
                <div className='space-y-4 px-6 py-4  overflow-y-auto h-[calc(100vh-99.1px)]'>
                    <h1 className='text-global_text_color text-base pb-4'>Yangi filial qo’shish</h1>
                    <div className="space-y-[5px]">
                        <label htmlFor="brach_name_uz_input" className="text-global_text_color/60 text-xs">Filial nomi uz</label>
                        <div className="flex items-center h-full border rounded-md">
                            <input type="text" id="brach_name_uz_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                        </div>
                    </div>
                    <div className="space-y-[5px]">
                        <label htmlFor="brach_name_ru_input" className="text-global_text_color/60 text-xs">Kategoriya nomi ru</label>
                        <div className="flex items-center h-full border rounded-md">
                            <input type="text" id="brach_name_ru_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                        </div>
                    </div>
                    <div className="space-y-[5px]">
                        <label htmlFor="brach_working_time_input" className="text-global_text_color/60 text-xs">Ish vaqti</label>
                        <div className='flex gap-2 items-center'>
                            <div className="flex items-center h-full border rounded-md">
                                <input type="time" id="brach_working_time_input" className="py-3 pl-5 rounded-md w-[91px] outline-none text-global_text_color text-xs" />
                            </div>
                            <div className='bg-global_silver w-[22px] h-0.5 rounded-full'></div>
                            <div className="flex items-center h-full border rounded-md">
                                <input type="time" id="brach_working_time_input" className="py-3 pl-5 rounded-md w-[91px] outline-none text-global_text_color text-xs" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[5px]">
                        <label htmlFor="brach_target_input" className="text-global_text_color/60 text-xs">Filial mo’ljal</label>
                        <div className="flex items-center h-full border rounded-md">
                            <input type="text" id="brach_target_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
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
            </MyDrawwer>
        </nav>
    )
}

export default BranchesHeader
