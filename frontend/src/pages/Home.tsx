import Side from '../components/Side'
import { Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <div className='flex relative max-w-[2300px] mx-auto'>
            <Side />
            <main className='w-[calc(100%-300px)]'>
                <Outlet />
            </main>
        </div>
    )
}

export default Home
