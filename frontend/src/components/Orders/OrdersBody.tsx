import { useSearchParams } from 'react-router-dom';
import OrdersByRow from './row/OrdersByRow';
import OrdersByCol from './col/OrdersByCol';

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
  },
  canceled:{
    key:"canceled",
    label:'Yopilgan'
  }
}
const OrdersBody = () => {
  const [searchParams] = useSearchParams();
  const flex = searchParams.get("flex") || "col";
  return (
    <article
      id='article'
      className={`py-5 space-y-3 h-[calc(100vh-80px)] max-w-7xl mx-auto`}>
      {
        flex === "col" ? <OrdersByCol /> : <OrdersByRow />
      }
     
    </article>
  )
}

export default OrdersBody
