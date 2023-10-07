type Branch = {
  nameUz?: string;
  latitude?: number;
  longitude?: number;
  nameRu?: string;
};
type OrderType = {
  id?: string;
  operator?: ClientType;
  orderItems?: null;
  orderCost?: number;
  customer?: ClientType;
  shippingCost?: number;
  orderNumber?: null;
  branch?: Branch;
  handleClick?: (item: OrderType) => void;
  handleDragStart?: (id: string) => void;
};

type ResponeOrderByRowType = {
  success?: boolean;
  data: RowDataType[];
  message?: string;
};
type RowDataType = {
  [key: string]: OrderType[];
};
type ResponeOrderByColType = {
  success: boolean;
  data: ResponseOrderColDataType;
  pageable: Pageable;
  message: string;
};
type ResponseOrderColDataType = {
  content: OrderType[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
};

type User = {
  name?: string;
  phoneNumber?: string;
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
