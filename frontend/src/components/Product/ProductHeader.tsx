import React from 'react'

// next ui 
import { Button, Select, SelectItem } from '@nextui-org/react'

// helpers
import { CloudIcon, FilterIcon, PlusIcon, SearchIcon } from '../../helpers/Icons'
import MyDrawwer from '../../helpers/MyDrawwer'
import MyCheckBox from '../../helpers/MyCheckBox';
const initialTableFilterArray = [
    {
        checked: false,
        label: "Narx bo’yicha (O’sish tartibida)"
    },
    {
        checked: false,
        label: "Narx bo’yicha (Kamayish tartibida)"
    },
    {
        checked: false,
        label: "Nom bo’yicha (A-Z)"
    },
    {
        checked: false,
        label: "Nom bo’yicha (Z-A)"
    }
];
const ProductHeader = () => {
    // states
    const [drawwerVisible, setDrawwerVisible] = React.useState(false);
    const [showFilters, setShowFilters] = React.useState(false)
    const [tableFilterArray, setTableFilterArray] = React.useState(initialTableFilterArray);

    // refs
    const filterCardRef = React.useRef<HTMLDivElement>(null);

    // toggleDrawer 
    const toggleDrawer = (status: boolean) => setDrawwerVisible(status);

    // toogleFilter
    const toogleFilter = (status: boolean) => setShowFilters(status);
    React.useEffect(() => {
        // Add event listener to the document to handle clicks
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (filterCardRef.current && !filterCardRef.current?.contains(event.target as Node)) {
            // Click occurred outside of the filter card, so close it
            toogleFilter(false)
        }
    };
    // onFilterChange 
    const onFinterChange = (propsItem: { checked: boolean, label: string }) => {
        const updatedArray = initialTableFilterArray.map((item) => {
            if (item.label === propsItem.label) {
                return { ...item, checked: true }
            }
            return item;
        });
        setTableFilterArray(updatedArray)

        // close filter div
        toogleFilter(false)
    };
    return (
        <React.Fragment>
            <nav className='h-[80px]  relative bg-white flex items-center justify-start gap-2 border-l-2 border-global_silver '>
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
                    <Button onClick={() => toogleFilter(true)} isIconOnly className='w-12 h-12 bg-transparent ' radius='full'>
                        <FilterIcon />
                    </Button>
                    {/* handle Dropdown */}
                    {
                        showFilters && <div ref={filterCardRef}>
                            <div className='absolute w-7 h-7 shadow bg-white left-[56.6%] top-[84%] rounded-[4px] z-[1] rotate-45  '>
                            </div>
                            <div className='absolute px-6 pt-5 pb-7 w-[313px]  left-1/3  bg-white top-full shadow-2xl rounded-md  z-[2]'>
                                <div className='space-y-1.5'>
                                    <h5 className='text-global_text_color/60 text-xs'>Kategoriya</h5>
                                    <Select size='sm' radius='sm' variant='bordered' label="Tanlang">
                                        <SelectItem key={'ichimliklar'} value={'Ichimliklar'} className='p-2'>Ichimliklar</SelectItem>
                                    </Select>
                                </div>
                                <div className='mt-4'>
                                    <ul className='space-y-1.5'>
                                        {
                                            tableFilterArray.map((item, index) => <li key={index} onClick={() => onFinterChange(item)} className='flex items-center justify-start gap-3 cursor-pointer'>
                                                {/* handle checkbox */}
                                                <MyCheckBox checked={item.checked} />
                                                <p className='text-global_text_color text-xs'>{item.label}</p>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </nav>
            {/* Add order  */}
            <MyDrawwer mt={80} isOpen={drawwerVisible} size="sm" onClose={() => toggleDrawer(false)}>
                <div className='px-6 py-4 space-y-4'>
                    <h1 className='text-global_text_color text-base pb-4'>Yangi maxsulot qo’shish</h1>
                    <div className="space-y-[5px]">
                        <label htmlFor="order_name_input" className="text-global_text_color/60 text-xs">Maxsulot nomi</label>
                        <div className="flex items-center h-full border rounded-md">
                            <input type="text" id="order_name_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                        </div>
                    </div>
                    <div className="space-y-[5px]">
                        <label htmlFor="category_selectbox" className="text-global_text_color/60 text-xs">Kategoriya</label>
                        <Select id='category_selectbox' size='sm' radius='sm' className='!w-full' variant='bordered' label="Tanlang">
                            <SelectItem key={'ichimliklar'} value={'Ichimliklar'} className='p-2'>Ichimliklar</SelectItem>
                        </Select>
                    </div>
                    <div className="space-y-[5px]">
                        <label htmlFor="order_price_input" className="text-global_text_color/60 text-xs">Narxi</label>
                        <div className="flex items-center h-full border rounded-md">
                            <input type="text" id="order_price_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                        </div>
                    </div>
                    <div className="space-y-[5px]">
                        <label htmlFor="order_more_input" className="text-global_text_color/60 text-xs">Qo’shimcha ma’lumot</label>
                        <div className="flex items-center h-full border rounded-md">
                            <input type="text" id="order_more_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                        </div>
                    </div>
                    <label className='flex justify-center items-center flex-col gap-1.5 border border-dashed p-4 cursor-pointer'>
                        <CloudIcon />
                        <p className='text-xs text-global_text_color/60'>Maxsulot rasmini yuklang</p>
                        <input type="file" hidden />
                    </label>
                    <Button className="bg-global_green rounded-md text-white text-sm w-[118px]">
                        Saqlash
                    </Button>
                </div>
            </MyDrawwer>
        </React.Fragment >
    )
}

export default ProductHeader
