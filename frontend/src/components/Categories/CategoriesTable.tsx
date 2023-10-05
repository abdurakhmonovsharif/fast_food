import {  Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { PenIcon, TrashIcon } from '../../helpers/Icons';
const rows = [
    {
        key: 1,
        category_uz: "Burger uz",
        category_ru: "Burger ru",
        empty_category: null,
    },
    {
        key: 2,
        category_uz: "Burger uz",
        category_ru: "Burger ru",
        empty_category: null,
    },
    {
        key: 3,
        category_uz: "Burger uz",
        category_ru: "Burger ru",
        empty_category: "Ichimliklar",
    },
    {
        key: 4,
        category_uz: "Burger uz",
        category_ru: "Burger ru",
        empty_category: "Ichimliklar",
    },
    {
        key: 5,
        category_uz: "Burger uz",
        category_ru: "Burger ru",
        empty_category: null,
    },

];

const columns = [
    {
        key: "kategoriya (UZ)",
        label: "Kategoriya (UZ)",
    },
    {
        key: "kategoriya (Ru)",
        label: "Kategoriya (Ru)",
    },
    {
        key: "bosh kategoriya",
        label: "Bosh kategoriya",
    },
    {
        key: "action",
        label: "ACTION",
    },
];

const CategoriesTable = () => {
    return (
        <Table
            isHeaderSticky
            className='px-3'
            classNames={{
                base: "max-h-[calc(100vh-120px)] overflow-y-auto",
            }}
        // bottomContent={
        //     hasMore && !isLoading ? (
        //         <div className="flex w-full justify-center">
        //             <Button isDisabled={false} variant="flat" >
        //                 {<Spinner color="white" size="sm" />}
        //                 Yana yuklash
        //             </Button>
        //         </div>
        //     ) : null
        // }
        >
            <TableHeader columns={columns} >
                {(column) => <TableColumn className='bg-global_silver' key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody
                loadingContent={<Spinner label='...loading' />}
                items={rows}>
                {(item) => (
                    <TableRow key={item.key} className='hover:scale-[1.01] transition-all duration-250 cursor-pointer'>
                        <TableCell>
                            <p className='text-global_text_color text-[13px]'>{item.category_uz}</p>
                        </TableCell>
                        <TableCell>
                            <p className='text-global_text_color text-[13px]'>{item.category_ru}</p>
                        </TableCell>
                        <TableCell>
                            <p className={`text-global_text_color text-[13px]`}>{
                                item.empty_category ? item.empty_category : <span className='text-sm font-bold'>-</span>
                            }</p>
                        </TableCell>

                        <TableCell className='flex items-center gap-3'>
                            <Button isIconOnly radius='full' className='bg-transparent border-global_silver border-4'><PenIcon /></Button>
                            <Button isIconOnly radius='full' className='bg-transparent flex items-center justify-center  border-global_silver border-4'><TrashIcon /></Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default CategoriesTable
