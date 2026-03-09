import { getInTouchContent } from "../../content/getInTouchContent"
import { InstagramIcon } from "../../assets/SVGs"

export default function ContactMe() {
    return (
        <section className="section-contact-me bg-[rgba(0,0,0,0.5)] py-16 px-8 md:px-24 rounded-2xl">
            <div className="max-w-screen flex flex-col items-center">
                <h2>Get In Touch</h2>
                <p className="get-in-touch text-center" style={{ whiteSpace: 'pre-line' }}>
                    {getInTouchContent}
                </p>

                <div className="mt-10 flex flex-row justify-center items-center gap-6 flex-wrap">
                    <a 
                        href="mailto:jer.tor2527@gmail.com"
                        aria-label="jer.tor2527@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-block duration-300 bg-blue-300 text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-85 transition-all"
                    >
                        Connect with me 🤙
                    </a>
                    <a 
                        href="https://www.instagram.com/jtor01?igsh=dGIwNmwxa3ZqanI3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110 inline-block hover:pointer-events-auto cursor-pointer"
                    > 
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </section>
    )
}