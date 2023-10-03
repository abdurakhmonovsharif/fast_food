import React from 'react'

import { Avatar, Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { PenIcon, TrashIcon } from '../../helpers/Icons';
const rows = [
    {
        key: 1,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    },
    {
        key: 2,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    },
    {
        key: 3,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    },
    {
        key: 4,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    }, {
        key: 5,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    }
    , {
        key: 6,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    }, {
        key: 7,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    },
    {
        key: 8,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    },
    {
        key: 9,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    },
    {
        key: 10,
        image: 'https://static.wixstatic.com/media/172071_87ef85134e624ab8a89b2dbff0badd2c~mv2.png/v1/fill/w_560,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/circle-burger.png',
        name: "Burger mini",
        sum: "20,000",
        other: 'Kichkina lavash, bla bla',
        category: "Burger"
    }
];

const columns = [
    {
        key: "maxsulot",
        label: "Maxsulot",
    },
    {
        key: "kategoriya",
        label: "Kategoriya",
    },
    {
        key: "narxi",
        label: "Narxi",
    },
    {
        key: "qo'shimcha",
        label: "Qo’shimcha",
    },
    {
        key: "action",
        label: "ACTION",
    },
];

const ProductTable = () => {
    // const [page, setPage] = React.useState(0);
    // const [isLoading, setIsLoading] = React.useState(false);
    // const hasMore = page > 9;
    return (
        <React.Fragment>
            <Table
                isHeaderSticky
                className='px-3'
                classNames={{
                    base: "max-h-[calc(100vh-120px)] overflow-y-auto",
                    table: "min-h-[calc(100vh-120px)] "
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
                            <TableCell className='space-x-2 flex items-center'>
                                <Avatar src={item.image} />
                                <p className='text-global_text_color text-[13px]'>{item.name}</p>
                            </TableCell>
                            <TableCell>
                                <p className='text-global_text_color text-[13px]'>{item.category}</p>
                            </TableCell>
                            <TableCell>
                                <p className='text-global_text_color text-[13px]'>{item.sum} UZS</p>
                            </TableCell>
                            <TableCell>
                                <p className='text-global_text_color text-[13px]'>{item.other}</p>
                            </TableCell>
                            <TableCell className='flex items-center gap-3'>
                                <Button isIconOnly radius='full' className='bg-transparent border-global_silver border-4'><PenIcon /></Button>
                                <Button isIconOnly radius='full' className='bg-transparent flex items-center justify-center  border-global_silver border-4'><TrashIcon /></Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </React.Fragment >
    )
}
export default ProductTable