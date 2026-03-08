import { getInTouchContent } from "../../content/getInTouchContent"

export default function ContactMe() {
    return (
        <section className="section-contact-me bg-[rgba(0,0,0,0.5)] py-24 pb-40 rounded-2xl">
            <div className="max-w-xl">
                <h2>Get In Touch</h2>
                <p className="get-in-touch" style={{ whiteSpace: 'pre-line' }}>
                    {getInTouchContent}
                </p>

                <div className="mt-10">
                    <a 
                        href="mailto:your-email@example.com" 
                        className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all"
                    >
                        Say Hola 👋
                    </a>
                </div>
            </div>
        </section>
    )
}