type Branch = {
  nameUz?: string;
  latitude?: number;
  longitude?: number;
  nameRu?: string;
};
type OrderType = {
  id?: string;
  operator?: null;
  orderItems?: null;
  orderCost?: number;
  customer?: null;
  shippingCost?: number;
  orderNumber?: null;
  branch?: Branch;
  handleClick?: (item: OrderType) => void;
  handleDragStart?: (id: string) => void;
};

type ResponeOrderByColType = {
  success: boolean;
  data: {
    [key: string]: OrderType[];
  };
  message: string;
};
type ClientType = {
  full_name?: string;
  phone_number?: string;
};
