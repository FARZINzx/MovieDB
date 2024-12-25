import { useLocation } from 'react-router-dom'
//icon
import * as Icons from "react-icons/ci";
//json
import sidebarMenuItem from "/src/db/sidebar-menu.json"
//image
import Logo from "../assets/logo.png"


export default function Sidebar(){
    const location = useLocation();

    return (
        <section className="bg-[#0D253F] h-screen col-span-1 sticky top-0 left-0 bottom-0 w-[274px] overflow-hidden text-white font-poppins py-8 px-14 poppins-medium shadow-custom">
            <div className=' w-full flex flex-col  justify-between gap-16'>
                {/* Logo */}
                <a href='/' className=' w-full flex items-center justify-between'>
                    <figure className='w-[37px] h-[31px]'>
                        <img
                            className='w-full h-full object-contain'
                            src={Logo}
                            alt='logo' />
                    </figure>
                    <p className='font-bold text-[22px]'>MovieDB</p>
                </a>
                {/* Item Menu */}
                <div className='flex flex-col items-end gap-8'>
                    {sidebarMenuItem.map((item) => {
                        const IconComponent = Icons[item.icon]; // Dynamically resolve the icon
                        return (
                            <a href={item.pathname} key={item.id} className={`flex items-center gap-5 w-full ${location.pathname === item.pathname ? 'text-[#01B4E4] font-bold' : 'text-white'}`}>
                                {IconComponent && <IconComponent className="text-2xl" />}
                                <span>{item.label}</span>
                            </a>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};