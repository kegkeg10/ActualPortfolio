import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id='skills' className='pt-10 pb-24'>
            {/* HEADER AND IMAGE SECTION */}
            <div className='md:flex md:justify-between md:gap-16 mt-32'>
                <motion.div
                    className='md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='font-playfair font-semibold text-4xl mb-5'>
                        My <span className='text-green'>Skills</span>
                    </p>
                    <LineGradient width='w-1/3' />
                    <p className='mt-10 mb-7'>
                        All Skills i Feel Good In as of Now!
                    </p>
                </motion.div>

                <div className='mt-16 md:mt-0'>
                    {isAboveMediumScreens ? (
                        <div
                        className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'
                        >
                        <img 
                            className='z-10'
                            src='assets/skills-image.png'
                        />
                        </div>
                    ) : (
                        <img 
                            className='z-10'
                            src='assets/skills-image.png'
                        />
                    )}
                </div>
            </div>
            {/* Skills */}
            <div className='md:flex md:justify-between mt-16 gap-32'>
                {/* Expiernce */} 
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >   
<div class="flex flex-wrap justify-start">
  <img
    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
    className="h-20 w-20 mx-4 my-4"
    alt="React"
    title="React"
  />
  <img
    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
    className="h-20 w-20 mx-4 my-4"
    alt="JavaScript"
    title="JavaScript"
  />
  <img
    src="https://i.ibb.co/3y581LV/nextjs.webp" 
    className="h-20 w-20 mx-4 my-4"
    alt="NextJS"
    title="NextJS"
  />
  <img
    src="https://i.ibb.co/zmXS06Z/tailwind.webp"
    className="h-20 w-20 mx-4 my-4"
    alt="Tailwind"
    title="Tailwind"
  />
  <img
    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
    className="h-20 w-20 mx-4 my-4"
    alt="HTML5"
    title="HTML5"
  />
  <img
    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
    className="h-20 w-20 mx-4 my-4"
    alt="CSS3"
    title="CSS3"
  />
  <img
    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
    className="h-20 w-20 mx-4 my-4"
    alt="Git"
    title="Git"
  />
  <img
    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
    className="h-20 w-20 mx-4 my-4"
    alt="MongoDB"
    title="MongoDB"
  />
  <img
    src="https://cdn4.iconfinder.com/data/icons/logos-3/455/nodejs-new-black-512.png"
    className="h-20 w-20 mx-4 my-4"
    alt="NodeJs"
    title="NodeJs"
  />
  <img
    src="https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg"
    className="h-20 w-20 mx-4 my-4"
    alt="Bootstrap"
    title="Bootstrap"
  />
</div>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills