import {  Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { MapPinIcon, PenIcon, TrashIcon } from '../../helpers/Icons';
const rows = [
    {
        key: 1,
        brach_name_uz: "Shaxrishton",
        brach_name_ru: "Shaxrishton",
        target: "Metro ro’parasida",
        working_time: "09:00 - 20:00"
    },
    {
        key: 2,
        brach_name_uz: "Xadra fast food",
        brach_name_ru: "Xadra fast food",
        target: "Royson dom oldida",
        working_time: "09:00 - 20:00"
    },
    {
        key: 3,
        brach_name_uz: "Maksim Gorgiy",
        brach_name_ru: "Maksim Gorgiy",
        target: "Metro ro’parasida",
        working_time: "09:00 - 20:00"
    },


];

const columns = [
    {
        key: "filial nomi (UZ)",
        label: "Filial nomi (UZ)",
    },
    {
        key: "filial nomi (Ru)",
        label: "Filial nomi (Ru)"
    },
    {
        key: "mo’ljal",
        label: "Mo’ljal",
    },
    {
        key: "ish vaqti",
        label: "Ish vaqti",
    },
    {
        key: "action",
        label: "Action",
    },
];

const BrachesTable = () => {
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
                            <p className='text-global_text_color text-[13px]'>{item.brach_name_uz}</p>
                        </TableCell>
                        <TableCell>
                            <p className='text-global_text_color text-[13px]'>{item.brach_name_ru}</p>
                        </TableCell>
                        <TableCell>
                            <p className='text-global_text_color text-[13px]'>{item.target}</p>
                        </TableCell>
                        <TableCell>
                            <p className='text-global_text_color text-[13px]'>{item.working_time}</p>
                        </TableCell>
                        <TableCell className='flex items-center gap-7'>
                            <Button isIconOnly radius='full' className='bg-transparent border-global_silver border-4'><MapPinIcon /></Button>
                            <Button isIconOnly radius='full' className='bg-transparent border-global_silver border-4'><PenIcon /></Button>
                            <Button isIconOnly radius='full' className='bg-transparent flex items-center justify-center  border-global_silver border-4'><TrashIcon /></Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default BrachesTable
