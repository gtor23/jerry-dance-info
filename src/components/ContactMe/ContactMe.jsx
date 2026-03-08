import { getInTouchContent } from "../../content/getInTouchContent"

export default function ContactMe() {
    return (
        <section className="section-contact-me">
            <div>
                <h1 className='text-white'>Get In Touch</h1>
                <p className="get-in-touch" style={{ whiteSpace: 'pre-line' }}>
                    {getInTouchContent}
                </p>
            </div>
        </section>
    )
}