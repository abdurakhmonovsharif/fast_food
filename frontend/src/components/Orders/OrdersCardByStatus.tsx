// helpers
import { BookMark, CheckIcon, ClockIcon, RejectIcon, UserIcon } from "../../helpers/Icons"

// components from next ui
import { Button } from "@nextui-org/react"
const OrdersCardByStatus = () => {
    return (
        <div className="px-4  py-5 bg-white  rounded-md shadow-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <div className="bg-global_green px-3 py-[7px]  text-center rounded-[18px] w-[60px]">
                        <span className="text-sm font-medium text-white ">8549</span>
                    </div>
                    <Button isIconOnly className="bg-global_silver rounded-full">
                        <BookMark />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span className="text-sm font-normal">00:24</span>
                </div>
            </div>
            <hr className="my-[18px]" />
            <div className="flex justify-between">
                <div className="mt-1.5">
                    <UserIcon />
                </div>
                <div className="space-y-0.5">
                    <p className="text-base font-medium text-global_text_color">Muhammad Jumayev</p>
                    <p className="text-xs font-medium text-global_text_color/60">(+99 893) 461-41-88</p>
                </div>
            </div>
            <div className="mt-[20px] flex items-center justify-between">
                <div>
                    <p className="text-[11px] text-global_text_color/60">Umumiy summa</p>
                    <p><span className="font-semibold text-global_text_color">40,400</span> UZS</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="bg-[#14E5E4] p-1.5 rounded-full"></div>
                    <p className="text-xs">Payme</p>
                </div>
            </div>
            <hr className="my-[18px]" />
            <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                    <div>
                        <p className="text-[11px] text-global_text_color/30">Operator:</p>
                        <p className="text-sm font-semibold">Komilova M</p>
                    </div>
                    <div>
                        <p className="text-[11px] text-global_text_color/30">Filial:</p>
                        <p className="text-sm font-semibold max-w-[110px]">Max Way
                            Maksim Gorkiy</p>
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

export default OrdersCardByStatus
