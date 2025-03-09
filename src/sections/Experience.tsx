import experience from "../assets/experience.json"

function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen transparent px-6
                      py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only
                      lg:relative lg:top-auto lg:mx-auto lg:w-full
                      lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest
                     text-woodsmoke-200 lg:sr-only"
        >
          Experience
        </h2>
      </div>
      <ol>
        { experience.map((job: any, index: number) => (
          <li className="mb-12" key={index}>
            <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-steel-blue-500 sm:col-span-2">
                {job.duration}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-steel-blue-300">
                  {job.position}, {job.company}
                </h3>
                <p className="mt-2 text-sm leading-normal">{job.overview}</p>
                <ul className="mt-2 flex flex-wrap">
                  {job.technologies.map((tech: string, index: number) => (
                    <li className="mr-1 5 mt-2" key={index}>
                      <div className="flex items-center rounded-full bg-steel-blue-500/20 px-3 py-1 text-xs font-medium leading-5 text-steel-blue-300 ">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
