//icon
import { CiHeart } from "react-icons/ci";

export function Card({image, title, description, size = "large"}) {
    const height = size === "large" ? "h-[301px]" : "h-[250px]";
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className={`grid-cols-1 rounded-[20px] ${height} relative border border-[#969696]`}
        >
            {/* Favorite Button */}
            <button className="p-2 rounded-lg bg-white flex items-center justify-center hover:bg-[#01B4E4] duration-300 group active:scale-90 absolute top-3 right-3">
                <CiHeart className="text-2xl text-[#01B4E4] group-hover:text-white duration-300" />
            </button>
            {/* Card Details */}
            <div className="absolute bottom-0 h-[86px] w-full bg-white backdrop-blur-[20px] opacity-85 p-4 flex flex-col gap-1 rounded-b-[20px]">
                <p className="font-semibold text-black">{title}</p>
                <p className="text-sm text-black">{description}</p>
            </div>
        </div>
    );
}
