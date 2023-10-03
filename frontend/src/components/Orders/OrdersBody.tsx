import { useSearchParams } from 'react-router-dom';
import OrdersCard from './OrdersCard'
import OrdersByAllStatus from './OrdersByAllStatus';
export const orderCardArray: OrderType[] = [
  {
    id: 'd34127e7-06dd-4a7f-ae1c-35fc103f67a1',
    filial: `Max Way
Maksim Gorkiy`,
    lastTime: `03:43`,
    operator: `Komilova S`,
    user: {
      full_name: 'Sharif Abduraxmonov',
      phone_number: '(+99 893) 143-44-13'
    },
    status: 'Yangi',
    delivery_sum: '5,300',
    sum: '23,000',
    order_number: 1
  },
  {
    id: 'dbd0496d-8b75-4b06-8cd6-59c116ef3d5f',
    filial: `Max Way
Maksim Gorkiy`,
    lastTime: `03:43`,
    operator: `Komilova M`,
    user: {
      full_name: 'Muhammad Jumayev',
      phone_number: '(+99 893) 461-41-88'
    },
    status: 'Yangi',
    delivery_sum: '5,000',
    sum: '35,400',
    order_number: 2
  },
  {
    id: 'dbd0496d-8b75-4b06-8cd6-59c116ef3d51',
    filial: `Max Way
Maksim Gorkiy`,
    lastTime: `03:43`,
    operator: `Komilova M`,
    user: {
      full_name: 'Muhammad Jumayev',
      phone_number: '(+99 893) 461-41-88'
    },
    status: 'Yangi',
    delivery_sum: '5,000',
    sum: '35,400',
    order_number: 3
  },
  {
    id: 'dbd0496d-8b75-4b06-8cd6-59c116ef3d5t',
    filial: `Max Way
Maksim Gorkiy`,
    lastTime: `03:43`,
    operator: `Komilova M`,
    user: {
      full_name: 'Muhammad Jumayev',
      phone_number: '(+99 893) 461-41-88'
    },
    status: 'Yangi',
    delivery_sum: '5,000',
    sum: '35,400',
    order_number: 4
  },
  {
    id: '48ab6d64-bb18-4a97-814c-0e46b78b4f86',
    filial: `Max Way
Maksim Gorkiy`,
    lastTime: `03:43`,
    operator: `Komilova M`,
    user: {
      full_name: 'Muhammad Jumayev',
      phone_number: '(+99 893) 461-41-88'
    },
    status: `Jo'natilgan`,
    delivery_sum: '5,000',
    sum: '35,400',
    order_number: 5
  },
  {
    id: 'f44821b0-77d1-45c3-8d4c-c84a570c96b4',
    filial: `Max Way
Maksim Gorkiy`,
    lastTime: `03:43`,
    operator: `Komilova M`,
    user: {
      full_name: 'Muhammad Jumayev',
      phone_number: '(+99 893) 461-41-88'
    },
    status: `Yopilgan`,
    delivery_sum: '5,000',
    sum: '35,400',
    order_number: 6
  },
];

const OrdersBody = () => {
  const [searchParams] = useSearchParams();
  const flex = searchParams.get("flex") || "col";
  const status = searchParams.get("status") || "Yangi";
  return (
    <article id='article' className={`px-10  py-5 space-y-3  h-[calc(100vh-80px)] overflow-y-auto  flex flex-col items-center`}>
      {
        flex === "col" ?
          orderCardArray.find(item => item.status === status) ?
            orderCardArray.filter(item => item.status === status).map((item, index) => <OrdersCard key={index} {...item} />)
            :
            `Ma'lumotlar topilmadi!`
          :
          <OrdersByAllStatus />
      }
    </article>
  )
}

export default OrdersBody
