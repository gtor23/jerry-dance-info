import { aboutMeContent } from '../../content/aboutMeContent';

export default function AboutMe() {
    return (
        <section className="bg-[rgba(0,0,0,0.5)] py-24 rounded-2xl">
            <h2>About Me</h2>
            <p style={{ whiteSpace: 'pre-line' }}>
                {aboutMeContent}
            </p>
        </section>
    )
}