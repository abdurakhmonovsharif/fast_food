// helpers
import { BookMark, CallIcon, CheckIcon, ClockIcon, PasteIcon, RejectIcon, TrackIcon, UserIcon } from "../../helpers/Icons"
// components from next ui
import { Button } from '@nextui-org/react'
const OrdersCardByCol = ({ operator, orderCost, shippingCost, orderNumber, customer, branch }: OrderType) => {
    console.log(operator, orderCost, shippingCost, orderNumber);
    function calculateTotalSum(): string {
        // const d_sum = Number(delivery_sum?.replace(",", "") || 0);
        // const order_sum = Number(sum?.replaceAll(",", "") || 0);
        // const total_sum = d_sum + order_sum;
        // return total_sum.toLocaleString("en-US")
        return 'null'
    }
    return (
        <div className='h-[150px] cursor-pointer bg-white grid grid-cols-4 grid-rows-1 rounded-md shadow-md hover:scale-[1.02] transition-all duration-250'>
            <div className="border-r-2 justify-center py-5 flex items-start gap-4">
                <div className="flex flex-col gap-[19px]">
                    <div className="bg-global_green  text-center text-white rounded-full py-[10px] w-24">
                        <span className="text-xl font-medium cursor-text">{orderNumber}</span>
                    </div>
                    <hr className="w-24" />
                    <div className="flex items-center w-24 justify-center gap-3">
                        <ClockIcon />
                        <span className="text-global_text_color text-xl cursor-text">{'00:01'}</span>
                    </div>
                </div>
                <Button isIconOnly className=" bg-global_silver p-3 rounded-full mt-0.5">
                    <BookMark />
                </Button>
            </div>
            <div className="border-r-2 flex justify-center flex-col items-center px-[34px]">
                <div className=" py-5 gap-[18px]  flex items-start">
                    <div className="mt-2">
                        <UserIcon />
                    </div>
                    <p className="text-xl font-medium cursor-text">
                        {'abdurakhmonov sharif'}
                    </p>
                </div>
                <div className="flex gap-[19px]  items-center justify-center w-full">
                    <CallIcon />
                    <p className="text-sm  font-medium text-global_text_color cursor-text">{"+998 (93) 143-44-13"}</p>
                </div>
            </div>
            <div className="border-r-2 flex flex-col justify-center py-5 px-5 gap-5 
            items-center ">
                <div className="flex gap-[23px]">
                    <div className="space-y-2">
                        <div className="flex items-center justify-start gap-[12px] ">
                            <div>
                                <PasteIcon />
                            </div>
                            <p className="text-sm text-global_text_color break-all hide-text cursor-text">{orderCost} UZS</p>
                        </div>
                        <div className="flex items-center justify-start gap-[12px] ">
                            <div>
                                <TrackIcon />
                            </div>
                            <p className="text-sm text-global_text_color cursor-text">{shippingCost} UZS</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="bg-[#14E5E4] p-1.5 rounded-full"></div>     
                        <p className="text-xs">Payme</p>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-global_text_color/60 text-xs">Umumiy summa</p>
                    <p className="text-global_text_color flex items-center gap-1 ">
                        <span className="font-semibold break-all cursor-text"> {calculateTotalSum()}</span> UZS
                    </p>
                </div>
            </div>
            <div className="relative flex items-start justify-cetner pl-[35px] py-5 flex-col">
                <div>
                    <p className="text-[11px] text-global_text_color/30">Operator:</p>
                    <p className="text-sm font-semibold cursor-text">{operator}</p>
                </div>
                <div>
                    <p className="text-[11px] text-global_text_color/30">Filial:</p>
                    <p className="text-sm font-semibold max-w-[110px] cursor-text">{branch?.nameUz}</p>
                </div>
                <div className="absolute flex flex-col gap-3 -right-5">
                    <Button isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                        <RejectIcon />
                    </Button>
                    <Button isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                        <CheckIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OrdersCardByCol
