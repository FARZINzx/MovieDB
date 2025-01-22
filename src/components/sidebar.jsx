import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// Icon
import * as lucide from "lucide-react";

// JSON
import sidebarMenuItem from "/src/db/sidebar-menu.json";
// Image
import Logo from "../assets/logo.png";

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <section className="bg-[#0D253F] h-screen col-span-1 sticky top-0 left-0 bottom-0 w-[274px] overflow-hidden text-white font-poppins py-8 px-14 poppins-medium shadow-custom">
            <div className='w-full flex flex-col justify-between gap-16 h-full'>
                {/* Logo */}
                <a href='/' className='w-full flex items-center justify-between'>
                    <figure className='w-[37px] h-[31px]'>
                        <img
                            className='w-full h-full object-contain'
                            src={Logo}
                            alt='logo'/>
                    </figure>
                    <p className='font-bold text-[22px]'>MovieDB</p>
                </a>
                {/* Item Menu */}
                <div className='flex flex-col  h-full justify-between'>
                    <div className='flex flex-col items-end gap-8'>
                        {sidebarMenuItem["part-1"].map((item) => {
                            const IconComponent = lucide[item.icon]; // Dynamically resolve the icon
                            return (
                                <button
                                    onClick={() => navigate(item.pathname)}
                                    key={item.id}
                                    className={`flex items-center gap-3 w-full hover:text-slate-400 duration-300 active:scale-95 ${location.pathname === item.pathname ? 'text-[#01B4E4] font-bold' : 'text-white'}`}>
                                    {IconComponent && <IconComponent className="text-2xl"/>}
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className='flex flex-col items-end gap-8'>
                        {sidebarMenuItem["part-2"].map((item) => {
                            const IconComponent = lucide[item.icon]; // Dynamically resolve the icon
                            return (
                                <button
                                    onClick={() => navigate(item.pathname)}
                                    key={item.id}
                                    className={`flex items-center gap-3 w-full hover:text-slate-400 duration-300 active:scale-95 ${location.pathname === item.pathname ? 'text-[#01B4E4] font-bold' : 'text-white'}`}>
                                    {IconComponent && <IconComponent className="text-2xl"/>}
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className='flex flex-col  gap-8'>
                        {sidebarMenuItem["part-3"].map((item) => {
                            const IconComponent = lucide[item.icon]; // Dynamically resolve the icon
                            return (
                                <button
                                    onClick={() => navigate(item.pathname)}
                                    key={item.id}
                                    className={`flex items-center gap-3 w-full hover:text-slate-400 duration-300 active:scale-95 ${location.pathname === item.pathname ? 'text-[#01B4E4] font-bold' : 'text-white'}`}>
                                    {IconComponent && <IconComponent className="text-2xl"/>}
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
