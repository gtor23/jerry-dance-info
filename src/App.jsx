import { Header, Hero, AboutMe, ContactMe } from './index'

function App() {
    return (
        <div className="min-h-screen flex items-center flex-col">
            <Header />
            <main className="w-full mx-auto px-6">
                <Hero />    
                <AboutMe />
                <ContactMe />
            </main>
        </div>
    )
}

export default App;