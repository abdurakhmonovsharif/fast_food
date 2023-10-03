import React from 'react'
import bg_food_image from '/assets/images/login_image.webp'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [hoverInput, setHoverInput] = React.useState({ username: false, password: false });
    const onHoverInput = (e: React.FocusEvent<HTMLInputElement>) => {
        setHoverInput({
            password: e.target.name === "password",
            username: e.target.name === "username",
        });
    }
    const navigate = useNavigate()
    const handleSignIn = (e: React.SyntheticEvent) => {
        e.preventDefault()
        navigate("/dashboard/orders")
    }
    return (
        <main className='max-w-[2100px] mx-auto'>
            <section className='flex items-center justify-center'>
                <div className='w-2/3 h-screen '>
                    <img src={bg_food_image} alt="__bg_food_image" className='h-screen w-full' />
                </div>
                <div className='w-[calc(100%-66%)] flex justify-center '>
                    <div className='flex flex-col w-[320px] items-center '>
                        <h1 className='text-global_text_color text-2xl'>Tizimga xush kelibsiz !</h1>
                        <p className='text-global_text_color/50'>Tizimga kirish uchun, login va parol orqali
                            autentifikatsiya jarayonidan o’ting</p>
                        <form className='w-full mt-[35px]  rounded-b-md' onSubmit={handleSignIn}>
                            <div className='shadow-lg'>
                                <div className='p-1 flex bg-white group/first rounded-t'>
                                    <div className={`h-[55px] w-1 rounded-e-md ${hoverInput.username && 'bg-global_yellow'}`}></div>
                                    <input name='username' autoComplete="off" onFocus={onHoverInput} type="text" className='w-full p-4 outline-none text-lg' placeholder='Foydalanuvchi nomi' />
                                </div>
                                <hr />
                                <div className='p-1 flex bg-white group/first rounded-b'>
                                    <div className={`h-[55px] w-1 rounded-e-md ${hoverInput.password && 'bg-global_yellow'}`}></div>
                                    <input name='password' onFocus={onHoverInput} type="password" className='w-full p-4 outline-none text-lg rounded-t' placeholder='Parol' />
                                </div>
                            </div>
                            <button className='mt-[28px] bg-global_text_color rounded-md text-white w-full px-24 py-5'>
                                <span className='text-lg font-semibold'>Tizimga kirish</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login
