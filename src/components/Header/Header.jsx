import { useState } from 'react';

export default function Header() {
    const [spinning, setSpinning] = useState(false);

    const handleLogoClick = () => {
        if (!spinning) {
            setSpinning(true);
            setTimeout(() => setSpinning(false), 600);
        }
    };

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <button 
                    onClick={handleLogoClick}
                    className="font-semibold tracking-tight cursor-pointer bg-transparent border-none text-inherit"
                    style={{
                        animation: spinning ? 'spinBounce 0.6s ease-out' : 'none',
                    }}
                >
                    JT
                </button>
                <style>{`
                    @keyframes spinBounce {
                        0% { transform: rotate(0deg) scale(1); }
                        25% { transform: rotate(180deg) scale(1.2); }
                        50% { transform: rotate(360deg) scale(0.9); }
                        75% { transform: rotate(360deg) scale(1.1); }
                        100% { transform: rotate(360deg) scale(1); }
                    }
                `}</style>
                <ul className="flex gap-6 text-sm font-semibold uppercase tracking-widest">
                    <li><a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-white/70 transition-colors">Home</a></li>
                    <li><a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-white/70 transition-colors">About</a></li>
                    <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-white/70 transition-colors">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}