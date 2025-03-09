import about from "../assets/about.json"

function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen transparent px-6
                      py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only
                      lg:relative lg:top-auto lg:mx-auto lg:w-full
                      lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest
                     text-woodsmoke-200 lg:sr-only"
        >
          About
        </h2>
      </div>
      <div>
        {about.map((paragraph: string, index: number) => (
          <p className="mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default About
