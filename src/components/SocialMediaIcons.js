import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
            className='hover:opacity-50 transition duration-500'
            href='https://www.linkedin.com/in/nicholas-garner-534456262/'
            target='_blank'
            rel='noreferrer'
        >
            <img alt='linkedin-link' src='../assets/linkedin.png' className='w-9 h-9' />
        </a>
        <a
            className='hover:opacity-50 transition duration-500'
            href='https://github.com/kegkeg10'
            target='_blank'
            rel='noreferrer'
        >
            <img alt='github-link' src='../assets/github.png' className='w-9 h-9' />
        </a>
    </div>
  )
}

export default SocialMediaIcons