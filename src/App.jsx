import { Header, Hero, AboutMe, ContactMe, Footer } from './index'

function App() {
    return (
        <div className="min-h-screen flex items-center flex-col pb-16">
            {/* Disable Header until fully functional */}
            {/* <Header /> */}
            <main className="w-full mx-auto px-6 flex flex-col items-center">
                <Hero />    
                <AboutMe />
                <ContactMe />
            </main>
            <Footer />
        </div>
    )
}

export default App;