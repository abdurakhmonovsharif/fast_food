import Side from '../components/Side'
import { Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <div className='max-w-[2100px] mx-auto flex'>
            <Side />
            <main className=' w-[calc(100%-300px)]'>
                <Outlet />
            </main>
        </div>
    )
}

export default Home
