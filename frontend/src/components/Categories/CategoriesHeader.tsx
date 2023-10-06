import { Button, Select, SelectItem } from '@nextui-org/react';
import React, { useState } from 'react'
import { PlusIcon, SearchIcon } from '../../helpers/Icons';
import MyDrawwer from '../../helpers/MyDrawwer'
import { useAddCategoryMutation, useGetCategoryQuery, useUpdateCategoryMutation } from '../../redux/rtq/category.api';
import { useDispatch, useSelector } from 'react-redux';
import { clearCategoryState } from '../../redux/reducers/category.reducer';
const CategoriesHeader = () => {
    // redux 
    const dispatch = useDispatch();
    const categoryState = useSelector((state: any) => state.category);

    // states and refs
    const [drawwerVisible, setDrawwerVisible] = React.useState(false);
    const [nameUz, setNameUz] = useState("")
    const [nameRu, setNameRu] = useState("")
    // toggleDrawer 
    const toggleDrawer = (status: boolean) => {
        setDrawwerVisible(status);

        // if isEditing clear isEditItem to null
        if (categoryState.isEditItem && !status) {
            dispatch(clearCategoryState({ ...categoryState, isEditItem: null }))
        }
    };

    // if which one item is editing open drawwer
    React.useEffect(() => {
        if (categoryState.isEditItem != null) {
            toggleDrawer(true)
            // fill in the blanks with values
            const { nameUz, nameRu } = categoryState.isEditItem;
            setNameRu(nameRu)
            setNameUz(nameUz)
        }
    }, [categoryState.isEditItem?.nameUz])

    // update item
    const [updateCategory] = useUpdateCategoryMutation()

    // add category
    const { refetch } = useGetCategoryQuery()
    const [addCategory] = useAddCategoryMutation();
    const handleAddCategory = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const editingItem: CategoryType = categoryState.isEditItem;
        const newDate: CategoryType = { id: editingItem.id, nameRu, nameUz, children: editingItem.children }
        // editing
        if (categoryState.isEditItem) {
            updateCategory(newDate).then(() => {
                refetch()
                toggleDrawer(false)
            })
        } else {
            // creating
            addCategory({
                nameUz,
                nameRu
            }).then(() => {
                refetch()
                toggleDrawer(false);
            })
        }
        setNameUz("");
        setNameRu("")
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
                                <input value={nameUz} onChange={(e) => setNameUz(e.target.value)} name='nameUz' type="text" id="catogory_name_uz_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
                            </div>
                        </div>
                        <div className="space-y-[5px]">
                            <label htmlFor="catogory_name_ru_input" className="text-global_text_color/60 text-xs">Kategoriya nomi ru</label>
                            <div className="flex items-center h-full border rounded-md">
                                <input value={nameRu} onChange={(e) => setNameRu(e.target.value)} name='nameRu' type="text" id="catogory_name_ru_input" className="py-3 pl-5 rounded-md w-full outline-none text-global_text_color text-xs" />
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
