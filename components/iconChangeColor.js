import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const IconAnimation = ({ children, colorMode }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={colorMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const IconChangeColor = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Change color theme"
      icon={
        colorMode === 'dark' ? (
          <IconAnimation colorMode={colorMode}>
            <SunIcon />
          </IconAnimation>
        ) : (
          <IconAnimation>
            <MoonIcon colorMode={colorMode} />
          </IconAnimation>
        )
      }
    />
  )
}

export default IconChangeColor
