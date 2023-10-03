import { Button } from "@nextui-org/react"
import karofel_image from "/assets/images/kartofel_img.png"
const ProductCard = () => {
    return (
        <div className="shadow-xl rounded-md w-full space-y-0.5 max-h-[219px]">
            <div className="w-full h-[119px]">
                <img src={karofel_image} alt="_kartofel_img_" className="rounded-t-md h-full w-full" />
            </div>
            <div className="p-[13px] space-y-2">
                <div>
                    <h1 className="text-global_text_color text-[13px]">Kortofel fri <span>(150g)</span></h1>
                    <p className="text-global_text_color/60 text-[10px]">Картофель фри, специи</p>
                </div>
                <div className="flex justify-between items-center flex-wrap ">
                    <p className="text-global_text_color text-xs"><span className="font-semibold">5,000</span> UZS</p>
                    <div className="flex items-center gap- rounded-md border ">
                        <Button className="bg-transparent h-6 !rounded-none text-xs" isIconOnly>-</Button>
                        <p className="text-global_text_color text-xs">2</p>
                        <Button className="bg-transparent h-6 !rounded-none text-xs" isIconOnly>+</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
