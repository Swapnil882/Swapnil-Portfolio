"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/data'

const Navbar = () => {
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (item: string) => {
        setSelected(item);
        setIsMobileMenuOpen(false);
        const section = document.getElementById(item.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="relative w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-[1298px] h-[50px] sm:h-[56px] lg:h-[56px] bg-[#171717]/95 text-white px-3.5 sm:px-6 lg:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white/20 mx-auto flex items-center justify-between z-50 shadow-md">
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-2.5">
                {navItems.slice(0, 3).map((item) => (
                    <button
                        key={item}
                        className={`w-[90px] h-[38px] flex items-center justify-center rounded-[60px] text-sm font-medium transition duration-300 ${selected === item ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        onClick={() => handleNavClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer select-none" onClick={() => handleNavClick("Home")}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#FD853A] rounded-full flex items-center justify-center shrink-0 shadow-xs">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <text x="4" y="17" fontSize="12" fontWeight="bold" fill="white">SD</text>
                    </svg>
                </div>
                <span className="font-bold text-xs sm:text-sm lg:text-base tracking-wide truncate">SWAPNIL DALAVI</span>
            </div>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
                {navItems.slice(3).map((item) => (
                    <button
                        key={item}
                        className={`w-[90px] h-[38px] flex items-center justify-center rounded-[60px] text-sm font-medium transition duration-300 ${selected === item ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        onClick={() => handleNavClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] active:scale-95 transition-all text-white shadow-xs shrink-0 cursor-pointer"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
            >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#171717]/95 rounded-[22px] border border-white/20 backdrop-blur-xl shadow-2xl lg:hidden z-50 overflow-hidden">
                    <div className="flex flex-col p-3 gap-1.5">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                className={`w-full h-[40px] flex items-center justify-center rounded-[18px] text-sm font-semibold transition-all duration-200 cursor-pointer ${selected === item ? 'bg-[#FD853A] text-white shadow-md' : 'bg-transparent text-white/90 hover:bg-white/10 active:bg-white/15'}`}
                                onClick={() => handleNavClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
