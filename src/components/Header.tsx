import { useState, useEffect, use } from "react"
import socials from "../assets/socials.json"

function Header() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%]
                       lg:flex-col lg:justify-between lg:py-24"
    >
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-steel-blue-200
                       sm:text-5xl"
        >
          <a href="/">Kenny Clark</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight
                     text-steel-blue-200 sm:text-xl"
        >
          Software Developer x Aspiring Artist
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Blending code and creativity to build seamless digital experiences.
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a href="#about" className={`group flex items-center py-3 ${activeSection === "about" ? "active" : ""}`}>
                <span className="nav-indicator mr-4 h-px w-8 bg-steel-blue-600
                                 transition-all group-hover:w-16
                                 group-hover:bg-steel-blue-200
                                 group-focus-visible:w-16
                                 group-focus-visible:bg-steel-blue-200
                                 motion-reduce:transition-none"
                />
                <span className="nav-text text-xs font-bold uppercase
                                 tracking-widest text-steel-blue-500
                                 group-hover:text-steel-blue-200
                                 group-focus-visible:text-steel-blue-200"
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a href="#experience" className={`group flex items-center py-3 ${activeSection === "experience" ? "active" : ""}`}>
                <span className="nav-indicator mr-4 h-px w-8 bg-steel-blue-600
                                 transition-all group-hover:w-16
                                 group-hover:bg-steel-blue-200
                                 group-focus-visible:w-16
                                 group-focus-visible:bg-steel-blue-200
                                 motion-reduce:transition-none"
                />
                <span className="nav-text text-xs font-bold uppercase
                                 tracking-widest text-steel-blue-500
                                 group-hover:text-steel-blue-200
                                 group-focus-visible:text-steel-blue-200"
                >
                  Experience
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        {socials.map((social: any, index: number) => (
          <li className="mr-5 shrink-0 text-xs" key={index}>
            <a
              href={social.url}
              className="block hover:text-steel-blue-200"
              target="_blank"
              rel="noreferrer noopener"
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
