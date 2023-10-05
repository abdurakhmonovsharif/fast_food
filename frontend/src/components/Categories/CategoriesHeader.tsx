import { Button, Select, SelectItem } from '@nextui-org/react';
import React from 'react'
import { PlusIcon, SearchIcon } from '../../helpers/Icons';
import MyDrawwer from '../../helpers/MyDrawwer'
import { useAddCategoryMutation, useGetCategoryQuery } from '../../redux/rtq/category.api';
const CategoriesHeader = () => {
    // states
    const [drawwerVisible, setDrawwerVisible] = React.useState(false);
    // toggleDrawer 
    const toggleDrawer = (status: boolean) => setDrawwerVisible(status);

    // add category
    const { refetch } = useGetCategoryQuery()
    const [addCategory] = useAddCategoryMutation();
    const handleAddCategory = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            nameUz: { value: string };
            nameRu: { value: string };
        };
        addCategory({
            nameUz: target.nameUz.value,
            nameRu: target.nameRu.value
        }).then(() => {
            refetch()
            toggleDrawer(false)
        })

    }
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
                <form onSubmit={handleAddCategory} className="flex px-6 py-4 justify-between flex-col  overflow-y-auto h-[calc(100vh-83px)]">
                    <div className='space-y-4'>
                        <h1 className='text-global_text_color text-base pb-4'>Yangi kategori qo’shish</h1>
                        <div className="space-y-[5px]">
                            <label htmlFor="catogory_name_uz_input" className="text-global_text_color/60 text-xs">Kategoriya nomi uz</label>
                            <div className="flex items-center h-full border rounded-md">
                                <input name='nameUz' type="text" id="catogory_name_uz_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                            </div>
                        </div>
                        <div className="space-y-[5px]">
                            <label htmlFor="catogory_name_ru_input" className="text-global_text_color/60 text-xs">Kategoriya nomi ru</label>
                            <div className="flex items-center h-full border rounded-md">
                                <input name='nameRu' type="text" id="catogory_name_ru_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                            </div>
                        </div>
                        <div className="space-y-[5px]">
                            <label htmlFor="category_selectbox" className="text-global_text_color/60 text-xs">Bosh kategoriyaga biriktirish</label>
                            <Select id='category_selectbox' size='sm' radius='sm' className='!w-full' variant='bordered' label="Tanlang">
                                <SelectItem key={'ichimliklar'} value={'Ichimliklar'} className='p-2'>Ichimliklar</SelectItem>
                            </Select>
                        </div>
                    </div>
                    <Button type='submit' className="bg-global_green rounded-md text-white text-sm w-[118px]">
                        Saqlash
                    </Button>
                </form>
            </MyDrawwer>
        </nav>
    )
}

export default CategoriesHeader
