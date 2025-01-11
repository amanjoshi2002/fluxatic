import Image from 'next/image';

export default function ProjectPage() {
  const projects = [
    {
      title: "Moonbeam",
      link: "#",
      thumbnail: "/images/1.jpeg",
    },
    {
      title: "Cursor",
      link: "#",
      thumbnail: "/images/2.png",
    },
    {
      title: "Rogue",
      link: "#",
      thumbnail: "/images/3.png",
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/images/4.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "/images/5.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/images/6.png",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "/images/7.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/images/8.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/9.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: "/images/11.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: "/images/12.png",
    },
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail: "/images/13.jpeg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail: "/images/14.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: "/images/15.jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail: "/images/16.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Logo, Content, and Project List */}
        <div className="w-full lg:w-1/5 pl-4">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/logo.gif"
              alt="Company Logo"
              width={150} // Reduced width
              height={60} // Reduced height
              className="object-contain"
            />
          </div>

          {/* Content Text - Hidden on small screens, visible on lg and above */}
          <div className="mb-8 hidden lg:block">
            <p className="text-xs leading-5 text-gray-400">
              Fluxatic Global © 2024. The work listed here represents a combination of the active clients of Fluxatic Global 
              (MenezesFernandes Technologies (OPC) Pvt. Ltd., formerly CreativeJoule Solutions) as well as the consolidated 
              clientele of major members prior to their employment or partnership. Appropriate mentions have been given to the 
              agencies through which the work was executed along with mentions of the member that carried out the work while at 
              the firm. Fluxatic Global does not claim ownership of any projects or deliverables of the brands that are not 
              linked to the firm contractually.
            </p>
          </div>

          {/* Projects List - Only visible on desktop */}
          <div className="hidden lg:block">
            <h2 className="text-xl font-bold mb-6">PROJECTS</h2>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <li key={index} className="text-sm text-gray-400 hover:text-white cursor-pointer">
                  {project.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Project Grid */}
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 text-sm text-gray-300 text-center">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}