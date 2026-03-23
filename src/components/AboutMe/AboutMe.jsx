import { aboutMeContent } from '../../content/aboutMeContent';

export default function AboutMe() {
    return (
        <section className="min-h-screen flex items-center max-[380px]:mb-8 sm:mb-0">
            <div className="bg-[rgba(0,0,0,0.5)] flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 py-16 px-8 md:px-24 rounded-2xl">        
                <div className="flex-1 w-full">
                    <h2 className="mb-6 text-white pb-2 text-center md:text-left">
                        About Me
                    </h2>
                    <p className="text-white leading-relaxed text-lg" style={{ whiteSpace: 'pre-line' }}>
                        {aboutMeContent}
                    </p>
                </div>
                
                <div className="w-full max-w-[12.5rem] md:max-w-[15rem] flex-shrink-0 self-center md:self-start xl:self-center">
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden border-[3px] border-white/10 bg-neutral-900">
                        <img 
                            src={`${import.meta.env.BASE_URL}gif/social_dance.gif`} 
                            alt="Dance Reel" 
                            className="w-full h-full object-cover brightness-95 hover:brightness-100 transition-all duration-300"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
                    </div>
                </div>

            </div>
        </section>
    )
}