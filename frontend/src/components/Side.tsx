// components from next ui
import { Avatar } from '@nextui-org/react'

// images
import avatar_image from '/assets/images/Bitmap.png'

// helper
import { ArchiveIcon, BarChartIcon, CheckCircleIcon, LayersIcon, LogOutIcon, MapPinIcon, SettingsIcon, UsersIcon } from '../helpers/Icons'

// menu items 
const menuItems = [
    {
        label: "Buyurtmalar",
        icon: <CheckCircleIcon />,
        path: "/dashboard/orders"
    },
    {
        label: "Maxsulotlar",
        icon: <ArchiveIcon />,
        path: "/dashboard/products"

    },
    {
        label: "Kategoriyalar",
        icon: <LayersIcon />,
        path: "/dashboard/categories"
    },
    {
        label: "Filiallar",
        icon: <MapPinIcon />,
        path: "/dashboard/branches"


    },
    {
        label: "Mijozlar",
        icon: <UsersIcon />,
        path: "/dashboard/customers"
    },
    {
        label: "Xisobot",
        icon: <BarChartIcon />,
        path: "/dashboard/report"

    },
    {
        label: "Katalog",
        icon: <SettingsIcon />,
        path: "/dashboard/catalog"

    },

];
// react router dom 
import { useNavigate } from 'react-router-dom'
const Side = () => {
    const navigate = useNavigate();
    const logOut=()=>{
        navigate("/login")
    }
    return (
        <aside className="w-[300px] max-w-[300px] py-7 flex flex-col justify-between h-screen shadow-md bg-white">
            <div className="flex items-center gap-5 px-6">
                <Avatar src={avatar_image} className='w-[70px] h-[70px] ' />
                <div >
                    <h1 className='text-global_text_color text-base font-semibold'>Fast Food</h1>
                    <p className='text-global_text_color/50 text-xs'>Online maxsulot sotuvi</p>
                </div>
            </div>
            <div className="pr-6 relative h-fit w-full mt-[1rem]">
                <div className='w-1 bottom-0 top-0 bg-global_yellow absolute'>
                </div>
                {
                    menuItems.map((item, index) => <div onClick={() => navigate(item.path)} key={index} className='group transition-all duration-200 hover:text-white hover:bg-global_yellow py-3 flex items-center px-5 gap-[15px] rounded-e-md cursor-pointer'>
                        <div className='bg-global_silver/50 p-2 group-hover:bg-transparent rounded-md'>
                            {item.icon}
                        </div>
                        <span className='text-[15px] '>{item.label}</span>
                    </div>
                    )
                }
            </div>
            <div onClick={logOut} className='group  py-3 flex items-center px-5 gap-[15px] rounded-e-md cursor-pointer'>
                <div className='bg-global_silver/50 p-2 group-hover:bg-transparent rounded-md'>
                    <LogOutIcon />
                </div>
                <span className='text-base'>Chiqish</span>
            </div>
        </aside>
    )
}

export default Side
