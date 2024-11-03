import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
export default function Projects() {
  return (
    <section className="projects-section" id="section-four">
      {/* section4-container */}
      <div className="section4-container ">
        {/* top-heading */}
        <div className="underline">
          <h1 className="heading">Portfolio</h1>
        </div>
        {/* projects-grid */}
        <div className="grid-container">
          <Link
            href="https://github.com/shirazkk/3legant-e-commerce-website"
            className="grid-item item-1"
            data-project-name="Project 1"
          >
            <div className="overlay">
              <i className="link-icon">
                <RiExternalLinkLine />
              </i>
              <span>3legant-e-commerce-website </span>
            </div>
          </Link>

          <Link
            href="https://github.com/shirazkk/My-Portfolio-website"
            className="grid-item item-2"
            data-project-name="Project 2"
          >
            <div className="overlay">
              <i className="link-icon">
                <RiExternalLinkLine />
              </i>
              <span>portfolio-website</span>
            </div>
          </Link>

          <div className="grid-item item-3" data-project-name="Project 3">
            <div className="overlay">
              <i className="link-icon">
                <RiExternalLinkLine />
              </i>
              <span>Todo-List </span>
            </div>
          </div>

          <div className="grid-item item-4" data-project-name="Project 4">
            <div className="overlay">
              <i className="link-icon">
                <RiExternalLinkLine />
              </i>
              <span>Resume Builder</span>
            </div>
          </div>

          <div className="grid-item item-5" data-project-name="Project 5">
            <div className="overlay">
              <i className="link-icon">
                <RiExternalLinkLine />
              </i>
              <span>UsabilityHub-Clone-Website</span>
            </div>
          </div>

          <div className="grid-item item-6" data-project-name="Project 6">
            <div className="overlay">
              <i className="link-icon">
                <RiExternalLinkLine />
              </i>
              <span>Netflix Clone</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
