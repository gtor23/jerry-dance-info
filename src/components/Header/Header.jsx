export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
            <nav className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="font-semibold tracking-tight">JT</span>
                <ul className="flex gap-6 text-sm font-semibold uppercase tracking-widest">
                    <li><a href="#hero" className="hover:text-white/70 transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-white/70 transition-colors">About</a></li>
                    <li><a href="#contact" className="hover:text-white/70 transition-colors">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}