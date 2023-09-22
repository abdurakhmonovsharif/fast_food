import { useSearchParams } from 'react-router-dom';
import OrdersCard from './OrdersCard'
import OrdersByAllStatus from './OrdersByAllStatus';
const OrdersBody = () => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "row"
  return (
    <article className='px-10  py-5 space-y-3 h-[calc(100vh-80px)] overflow-y-auto  flex flex-col items-center'>
      {
        view === "row" ?
          <>
            <OrdersCard /> <OrdersCard /> <OrdersCard /> <OrdersCard /> <OrdersCard />
          </> :
          <OrdersByAllStatus />
      }

    </article>
  )
}

export default OrdersBody
