type OrderType = {
  status?: string;
  id?: string;
  lastTime?: string;
  user?: ClientType;
  operator?: string;
  filial?: string;
  delivery_sum?: string | any;
  sum?: string | any;
  order_number?: number;
  handleClick?: (item: OrderType) => void;
  handleDragStart?: (id: string) => void;
};
type ClientType = {
  full_name?: string;
  phone_number?: string;
};
