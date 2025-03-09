import "./index.css"

import About from "./sections/About"
import Experience from "./sections/Experience"
import Header from "./components/Header"

export function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12
                    md:py-16 lg:py-0"
    >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-[58%] lg:py-24">
          <About />
          <Experience />
        </main>
      </div>
    </div>
  )
}

export default App
