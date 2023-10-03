import React from 'react'
// next ui 
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Select, SelectItem } from '@nextui-org/react'

// helpers
import { FilterIcon, PlusIcon, SearchIcon } from '../../helpers/Icons'
import MyDrawwer from '../../helpers/MyDrawwer'
const ProductHeader = () => {
    // states
    const [drawwerVisible, setDrawwerVisible] = React.useState(false);

    // toggleDrawer 
    const toggleDrawer = (status: boolean) => (setDrawwerVisible(status))
    return (
        <React.Fragment>
            <nav className='h-[80px] z-20 relative bg-white flex items-center justify-start gap-2 border-l-2 border-global_silver '>
                <Button onClick={() => toggleDrawer(true)} className='rounded-none flex items-center justify-center bg-transparent gap-3 px-9 h-full  border-r-2 border-global_silver'>
                    <div className='bg-global_green p-3 rounded-full'>
                        <PlusIcon />
                    </div>
                    <p className='text-global_text_color text-xs font-semibold text-left'>Yangi maxsulot <br />
                        qo’shish</p>
                </Button>
                <div className='flex items-center h-full gap-5 pl-12'>
                    <div className='bg-global_silver w-[300px] p-4 rounded-full flex items-center justify-between '>
                        <input type="text" className='bg-transparent w-full h-full outline-none text-global_text_color/60 text-[13px]' placeholder='Qidirish' />
                        <SearchIcon />
                    </div>
                    <Button isIconOnly className='w-12 h-12 bg-transparent' radius='full'>
                        <FilterIcon />
                    </Button>
                    {/* handle Dropdown */}

                    <div className='absolute w-[313px] h-[227px] bg-white top-full z-10 shadow-xl rounded-md'>
                        <div className='absolute w-7 h-7 shadow-xl border border-w right-[43px] -top-3 rounded-[4px] rotate-45 -z-10 '>

                        </div>
                    </div>
                </div>
            </nav>
            {/* Add order  */}
            <MyDrawwer mt={80} isOpen={drawwerVisible} size="sm" onClose={() => toggleDrawer(false)}>

            </MyDrawwer>
        </React.Fragment >
    )
}

export default ProductHeader
