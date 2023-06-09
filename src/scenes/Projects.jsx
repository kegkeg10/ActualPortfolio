import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img
          src={`../assets/${projectTitle}.png`}
          alt={projectTitle}
          style={{ width: "400px", height: "400px" }}
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Projects
          </div>
          <Project title="jobster"  link="https://jobsterproject.netlify.app" description="This is a project about Keeping track of all the jobs you applied for Using React." />
          <Project title="quizz"  link="https://kegkeganimesite.netlify.app" description="A Naruto Quiz App Using JavaScript"/>


          {/* ROW 2 */}
          <Project title="hangman"  link="https://hangmanclonekeg.netlify.app" description="Hangman clone Using TypeScript. Made from Tutorial" />
          <Project title="floppy"  link="https://animechatfloppy13.netlify.app" description="Floppy Bird clone using React" />
          <Project title="comfysloth"  link="https://ecomreactcomfy.netlify.app" description="comfysloth Ecom store using React" />

          {/* ROW 3 */}
          <Project title="menu"  link="https://nicmenureact.netlify.app/" description="Menu app using Vite And React" />
          <Project title="cool"  link="https://nicknoteapp.netlify.app/" description="Note app with react" />
          <div
            className="flex justify-center text-center items-center p-10 bg-brown
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Projects
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;