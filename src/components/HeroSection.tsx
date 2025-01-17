'use client'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:your@email.com',
      label: 'Email'
    }
  ]

  const technologies = ['DevOps', 'AWS', 'Blockchain', 'Security']

  return (
    <Parallax
      bgImage="/images/bg.jpg"
      strength={300}
      blur={0}
      bgImageStyle={{ objectFit: 'cover', opacity: 0.7 }}
      renderLayer={percentage => (
        <div
          style={{
            position: 'absolute',
            background: `rgba(5, 10, 48, ${percentage * 0.8})`,
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
          }}
        />
      )}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          {/* Título principal con espacio simple */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <motion.span 
              className="bg-gradient-to-r from-turquoiseBlue to-skyBlue bg-clip-text text-transparent inline-block"
            >
              {["I'm", "Franklin"].map((word, wordIndex) => (
                <motion.span key={`word-${wordIndex}`} className="inline-block">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: (wordIndex * word.length + charIndex) * 0.1,
                        type: "spring",
                        stiffness: 120
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex === 0 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-block"
                      style={{ marginRight: '0.25em' }} // Reducido a un espacio simple
                    >
                      {' '}
                    </motion.span>
                  )}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Roles con animación de typing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-bold"
          >
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Blockchain Engineer',
                2000,
                'DevOps & Cloud Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold"
            />
          </motion.div>

          {/* Descripción */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 font-light italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Building secure, reliable infrastructure that drives impact and rewards.
            Transforming complex challenges into scalable solutions.
          </motion.p>

          {/* Badges de tecnologías */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex justify-center gap-2 flex-wrap"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.1 }}
                className="px-4 py-1 bg-navyBlue rounded-full text-sm font-medium text-turquoiseBlue border border-turquoiseBlue/30"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3 }}
            className="flex justify-center space-x-6 pt-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-turquoiseBlue transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.2 }}
            className="pt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-button-gradient rounded-full text-white font-semibold hover:shadow-glow transition-all duration-300"
            >
              View My Work
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 3.5, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-300 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 rounded-full bg-turquoiseBlue"
            />
          </div>
        </motion.div>
      </motion.div>
    </Parallax>
  )
}

export default dynamic(() => Promise.resolve(HeroSection), {
  ssr: false
})