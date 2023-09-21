import OrdersCard from './OrdersCard'
const OrdersBody = () => {
  return (
    <div className='px-10 py-5 space-y-3 h-[calc(100vh-80px)] overflow-y-auto  flex flex-col items-center'>
      <OrdersCard />
      <OrdersCard />
      <OrdersCard />
      <OrdersCard />
    </div>
  )
}

export default OrdersBody
