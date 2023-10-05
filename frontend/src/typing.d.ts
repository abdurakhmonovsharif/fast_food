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
type ResponseGetCategory = {
  content: CategoryType[];
  pageable: Pageable;
};
type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

type Page = {
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
type CategoryType = {
  id?: string;
  nameRu?: string;
  nameUz?: string;
  children?: [];
};
