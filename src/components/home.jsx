//components
import { Card } from "./Card";
//json
import nowPlayingCard from "/src/db/now-playing-card.json";
import upcomingCard from "/src/db/upcoming-card.json";
//icon
import { CiHeart,CiSearch } from "react-icons/ci";
//images
const images = import.meta.glob('/src/assets/*.png', { eager: true });

export default function Home() {
    return (
        <section className="bg-[#25221F] w-full font-poppins">
            <div className="w-full h-full flex-col flex gap-5">
                {/* Header Section */}
                <div className="w-full h-[455px] bg-custom px-20 py-10">
                    <div className="flex justify-between h-full flex-col">
                        {/* Navigation and Search Bar */}
                        <div className="flex items-center justify-between">
                            {/* Navigation Links */}
                            <div className="flex items-center gap-10">
                                <a href="#" className="text-white font-medium hover:underline duration-300">
                                    Movies
                                </a>
                                <a href="#" className="text-white font-medium hover:underline duration-300">
                                    Series
                                </a>
                                <a href="#" className="text-white font-medium hover:underline duration-300">
                                    Documentaries
                                </a>
                            </div>
                            {/* Search Bar */}
                            <div className="w-[530px] h-[45px] flex items-center bg-[#3A3F47] px-6 rounded-2xl">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="placeholder:text-[#67686D] placeholder:text-sm bg-transparent w-full outline-0 text-white"
                                />
                                <CiSearch className="text-[#01B4E4] text-2xl cursor-pointer active:scale-95 duration-300" />
                            </div>
                        </div>
                        {/* Header Information */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-5xl text-white">Insider</p>
                            <p className="text-sm text-white">2022 | 148 minutes | Comedy horror</p>
                            <div className="flex items-center gap-5">
                                <button className="py-[17px] px-[24px] flex items-center justify-center rounded-[14px] bg-[#0D253F] hover:brightness-90 duration-300 text-white active:scale-90">
                                    Details
                                </button>
                                <button className="p-[15px] rounded-[14px] bg-white flex items-center justify-center hover:bg-[#01B4E4] duration-300 group active:scale-90">
                                    <CiHeart className="text-2xl text-[#01B4E4] group-hover:text-white duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Now Playing Section */}
                <div className="w-full py-2 px-20 flex flex-col gap-4">
                    <p className="font-semibold text-xl pl-1 text-white">Now Playing</p>
                    <div className="grid grid-cols-4 gap-5 w-full">
                        {nowPlayingCard.map((item) => (
                            <Card
                                key={item.id}
                                image={images[`/src/assets/${item.image}`]}
                                title={item.title}
                                description={item.description}
                                size="large"
                            />
                        ))}
                    </div>
                </div>

                {/* Upcoming Section */}
                <div className="w-full py-8 px-20 flex flex-col gap-4">
                    <p className="font-semibold text-xl pl-1 text-white">Upcoming</p>
                    <div className="grid grid-cols-3 gap-5 w-full">
                        {upcomingCard.map((item) => (
                            <Card
                                key={item.id}
                                image={images[`/src/assets/${item.image}`]}
                                title={item.title}
                                description={item.description}
                                size="small"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
