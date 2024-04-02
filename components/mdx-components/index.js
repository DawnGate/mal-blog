import MLink from './Link'
import MCodeBlock from './MCodeBlock'
import MHeading from './MHeading'
import MSubHeading from './MSubHeading'
import MTypography from './MTypography'

const mdxComponents = {
  p: MTypography,
  h1: MHeading,
  h2: MSubHeading,
  a: MLink,
  code: MCodeBlock,
}

export default mdxComponents
