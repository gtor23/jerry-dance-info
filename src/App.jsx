import { Header, Hero, AboutMe, ContactMe } from './index'

function App() {
    return (
        <div className="min-h-screen flex items-center flex-col pb-16">
            {/* Disable Header until fully functional */}
            {/* <Header /> */}
            <main className="w-full mx-auto px-6">
                <Hero />    
                <AboutMe />
                <ContactMe />
            </main>
        </div>
    )
}

export default App;