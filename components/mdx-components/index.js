import MLink from './Link'
import MCodeBlock from './MCodeBlock'
import MHeading from './MHeading'
import MTypography from './MTypography'

const mdxComponents = {
  p: MTypography,
  h1: MHeading,
  a: MLink,
  code: MCodeBlock,
}

export default mdxComponents
