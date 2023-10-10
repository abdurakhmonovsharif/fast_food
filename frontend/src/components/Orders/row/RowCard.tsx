// helpers
import { BookMark, CheckIcon, ClockIcon, RejectIcon, UserIcon } from "../../../helpers/Icons"

// components from next ui
import { Button } from "@nextui-org/react"
const RowCard = ({ branch, customer, id, operator, orderItems, orderCost, orderNumber, shippingCost, handleClick, handleDragStart, handleDelete,handleUpdateStatus }: OrderType) => {
    const item: OrderType = {
        branch, customer, id, operator, orderItems, orderCost, orderNumber, shippingCost
    }
    function calculateTotalSum(): string {
        if (shippingCost && orderCost) {
            const total_sum = shippingCost + orderCost;
            return total_sum.toLocaleString("en-US")
        } else {
            return "0"
        }
    }
    return (
        <div
            onDragStart={handleDragStart}
            onClick={() => handleClick?.(item)}
            draggable
            className="px-4 py-5 bg-white cursor-pointer rounded-md shadow-xl hover:scale-[1.02] transition-all duration-250"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <div className="bg-global_green px-3 py-[7px]  text-center rounded-[18px] w-[60px]">
                        <span className="text-sm font-medium text-white cursor-auto">{orderNumber}</span>
                    </div>
                    <Button isIconOnly className="bg-global_silver rounded-full">
                        <BookMark />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span className="text-sm font-normal cursor-auto">{'00:01'}</span>
                </div>
            </div>
            <hr className="my-[18px]" />
            <div className="flex justify-between gap-[18px] items-center">
                <div className="mt-1.5">
                    <UserIcon />
                </div>
                <div className="space-y-0.5 cursor-auto text-end">
                    <p className="text-base font-medium text-global_text_color">{customer?.name}</p>
                    <p className="text-xs font-medium text-global_text_color/60">{customer?.phoneNumber}</p>
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
                        <p className="text-sm font-semibold">{operator.name}</p>
                    </div>
                    <div>
                        <p className="text-[11px] text-global_text_color/30">Filial:</p>
                        <p className="text-sm font-semibold max-w-[110px]">{branch?.nameUz}</p>
                    </div>
                </div>
                <div>
                    <div className=" flex flex-col gap-3 -right-5">
                        <Button onClick={handleDelete} isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                            <RejectIcon />
                        </Button>
                        <Button onClick={handleUpdateStatus} isIconOnly className="rounded-full bg-white border-4 border-global_silver">
                            <CheckIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowCard
