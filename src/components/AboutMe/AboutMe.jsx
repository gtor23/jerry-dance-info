import { aboutMeContent } from '../../content/aboutMeContent';

export default function AboutMe() {
    return (
        <section className ="section-about-me">
            <div className="about-me-heading">
                {/* <h2 className='text-white'>
                    About Me
                </h2> */}
            </div>
            <div className="about-me-text">
                <p style={{ whiteSpace: 'pre-line' }}>
                    {aboutMeContent}
                </p>
            </div>
        </section>
    )
}