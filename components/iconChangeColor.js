import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const IconAnimation = ({ children, color }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={color}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          duration: 0.2,
          ease: 'backIn',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const IconChangeColor = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      className="icon-change-theme-color"
      display="flex"
      position="relative"
      width="40px"
    >
      <IconAnimation color={colorMode}>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Change color theme"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        />
      </IconAnimation>
    </Box>
  )
}

export default IconChangeColor
