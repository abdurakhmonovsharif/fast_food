// helpers
import { BookMark, CheckIcon, ClockIcon, RejectIcon, UserIcon } from "../../helpers/Icons"

// components from next ui
import { Button } from "@nextui-org/react"
const OrdersCardByRow = ({ filial, id, lastTime, status, operator, delivery_sum, sum, user, order_number, handleClick, handleDragStart }: any) => {
    const item: any = {
        filial, delivery_sum, id, lastTime, operator, status, sum, user, order_number
    }
    function calculateTotalSum(): string {
        const d_sum = Number(delivery_sum?.replace(",", "") || 0);
        const order_sum = Number(sum?.replaceAll(",", "") || 0);
        const total_sum = d_sum + order_sum;
        return total_sum.toLocaleString("en-US")
    }
    return (
        <div
            onDragStart={() => handleDragStart?.(id ?? "")}
            onClick={() => handleClick?.(item)}
            draggable
            className="px-4 py-5 bg-white cursor-pointer  rounded-md shadow-xl hover:scale-[1.02] transition-all duration-250"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <div className="bg-global_green px-3 py-[7px]  text-center rounded-[18px] w-[60px]">
                        <span className="text-sm font-medium text-white cursor-auto">{order_number}</span>
                    </div>
                    <Button isIconOnly className="bg-global_silver rounded-full">
                        <BookMark />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span className="text-sm font-normal cursor-auto">{lastTime}</span>
                </div>
            </div>
            <hr className="my-[18px]" />
            <div className="flex justify-between gap-[18px]">
                <div className="mt-1.5">
                    <UserIcon />
                </div>
                <div className="space-y-0.5 cursor-auto">
                    <p className="text-base font-medium text-global_text_color">{user?.full_name}</p>
                    <p className="text-xs font-medium text-global_text_color/60">{user?.phone_number}</p>
                </div>
            </div>
            <div className="mt-[20px] flex items-center justify-between gap-2">
                <div className="cursor-auto">
                    <p className="text-[11px] text-global_text_color/60">Umumiy summa</p>
                    <p><span className="font-semibold text-global_text_color break-all">{calculateTotalSum()}</span> UZS</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="bg-[#14E5E4] p-1.5 rounded-full"></div>
                    <p className="text-xs">Payme</p>
                </div>
            </div>
            <hr className="my-[18px]" />
            <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                    <div className="cursor-auto">
                        <p className="text-[11px] text-global_text_color/30">Operator:</p>
                        <p className="text-sm font-semibold">{operator}</p>
                    </div>
                    <div>
                        <p className="text-[11px] text-global_text_color/30">Filial:</p>
                        <p className="text-sm font-semibold max-w-[110px]">{filial}</p>
                    </div>
                </div>
                <div>
                    <div className=" flex flex-col gap-3 -right-5">
                        <Button isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                            <RejectIcon />
                        </Button>
                        <Button isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                            <CheckIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersCardByRow
