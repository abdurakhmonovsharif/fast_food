import { useSearchParams } from 'react-router-dom';
import OrdersCardByCol from './OrdersCardByCol'
import OrdersByAllStatus from './OrdersByAllStatus';
import React from 'react';
import { useGetOrderByColumsQuery } from '../../redux/rtq/orders.api';
import { Spinner } from '@nextui-org/react';

// temporarily in any type
export const orderCardArray: any = [
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
interface OrderStatusesType {
  [key: string]: {
    label: string;
    key: string;
  };
}
export const orderStatuses: OrderStatusesType = {
  pending: {
    label: "Yangi",
    key: "pending"
  },
  processing: {
    label: "Qabul qilingan",
    key: "processing"
  },
  shipped: {
    label: "Jo'natilgan",
    key: "shipped"
  },
  delivered: {
    label: "Yetkazilgan",
    key: "delivered"
  }
}
const OrdersBody = () => {
  const [searchParams] = useSearchParams();
  const flex = searchParams.get("flex") || "col";
  const status = searchParams.get("status") || "Yangi";

  // get orderByColums
  const { data, isLoading } = useGetOrderByColumsQuery();
  const filteredOrderCol: any = data && Object.keys(data?.data).filter(item1 => item1 === status).map(key => data.data[key])[0]
  return (
    <article
      id='article'
      className={`px-10 py-5 space-y-3 h-[calc(100vh-80px)] overflow-y-auto  flex flex-col items-center`}>
      {
        isLoading ?
          <div className='flex items-center justify-center h-full w-full'>
            <Spinner size='lg' color='success' />
          </div>
          :
          <React.Fragment>
            {/* col order cards  */}
            {
              flex === "col" ?
                filteredOrderCol ?
                  filteredOrderCol?.map((item: OrderType, index: number) => <OrdersCardByCol
                    key={index} {...item}
                  />
                  )
                  : `Ma'lumotlar topilmadi!`
                :
                <React.Fragment>
                  {/* row order cards  */}
                  < OrdersByAllStatus />
                </React.Fragment>
            }
          </React.Fragment>
      }

    </article>
  )
}

export default OrdersBody
