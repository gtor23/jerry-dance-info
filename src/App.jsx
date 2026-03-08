import { Hero, AboutMe, ContactMe } from './index'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <main>
                <Hero />
                <AboutMe />
                <ContactMe />
            </main>
        </div>
    )
}

export default App;