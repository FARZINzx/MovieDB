//icon
import { FaRegBell , FaSearch  } from "react-icons/fa";
//component
import {Card} from "./card.jsx";
//json
import watchListCard from "../db/watch-list.json";



export default function Favorites(){
    return(
        <section className='bg-[#25221F] min-h-screen overflow-hidden w-full font-poppins py-10 px-20 '>
            {/*Nav*/}
            <div className='w-full flex justify-between items-center'>
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
                <div className='flex items-center gap-7'>
                    <FaSearch className="text-white size-5 font-semibold cursor-pointer active:scale-95 duration-300" />
                    <FaRegBell className="text-white size-6 font-semibold cursor-pointer active:scale-95 duration-300"/>
                    <div className='flex items-center gap-2'>
                        <figure className='size-8 rounded-full overflow-hidden'>
                            <img src='src/assets/avatar.jpg' alt='avater' className={'object-cover object-center'} />
                        </figure>
                        <p className={'font-medium text-white'}>Tetiana</p>
                    </div>


                </div>
            </div>
            {/* Upcoming Section */}
            <div className="w-full py-12  flex flex-col gap-4">
                <p className="font-semibold text-xl pl-1 text-white">Watch List</p>
                <div className="grid grid-cols-3 gap-5 w-full">
                    {watchListCard.map((item) => (
                        <Card
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            size="small"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}