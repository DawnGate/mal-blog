import { Text, useColorModeValue } from '@chakra-ui/react'

const CustomText = ({ children, active = true, ...rest }) => {
  const colorActive = useColorModeValue('black', 'white')
  const colorNotActive = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const color = active ? colorActive : colorNotActive
  return (
    <Text color={color} {...rest}>
      {children}
    </Text>
  )
}

export default CustomText
