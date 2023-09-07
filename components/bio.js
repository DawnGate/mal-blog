import { Box, Image, Link } from '@chakra-ui/react'
import CustomText from './text'
import NextLink from 'next/link'
import { GITHUB_LINK, LINKEDIN_LINK } from '@/config/constant'

const BioBox = ({ children }) => {
  return <Box marginY={2}>{children}</Box>
}

const BioHeader = ({ title }) => {
  return (
    <CustomText fontWeight={600} fontSize="xl">
      {title}
    </CustomText>
  )
}

const BioBody = ({ introduce }) => {
  return (
    <CustomText active={false} fontWeight={500} textIndent={8}>
      {introduce}
    </CustomText>
  )
}

const BioContact = () => {
  return (
    <Box textIndent={'8'} fontWeight={700}>
      <Box>
        <Link as={NextLink} href={GITHUB_LINK} color="teal.500">
          Github
        </Link>
      </Box>
      <Box>
        <Link as={NextLink} href={LINKEDIN_LINK} color="teal.500">
          Linkedin
        </Link>
      </Box>
    </Box>
  )
}

const BioSection = () => {
  return (
    <section>
      <BioBox>
        <Image src="/assets/images/profile.jpg" alt="profile"></Image>
        <CustomText textAlign={'center'} fontWeight={600} active={false}>
          &quot;Every day is an adventure.&quot;
        </CustomText>
      </BioBox>
      <BioBox>
        <BioHeader title="About me" />
        <BioBody
          introduce="Hi, I'm Quyen Lam, my name mean natural and mountain. I'm a computer science engineer. Currently, I work as a frontend developer focus in React and React ecosystem. I'm love to improve product from UI,UX, ... to performance.  
       I love solve problem, learning architecture and avoid problem from learning after falls. My aiming is learning more as I can. 
        "
        />
      </BioBox>
      <BioBox>
        <BioHeader title="The value I live by" />
        <BioBody introduce="Courage - I solve many problem and pass through the scare to find the path with the courage." />
        <BioBody introduce="Professional - Try to get the better and better, I'm always think how to professional in what I do and what I will do. Create value for product and for me, from this 'value' I gain more experiences." />
      </BioBox>
      <BioBox>
        <BioHeader title="My hobbies" />
        <BioBody introduce="Running, swimming, reading books, listen music and cooking." />
      </BioBox>
      <BioBox>
        <BioHeader title="How to find me" />
        <BioContact />
      </BioBox>
    </section>
  )
}

export default BioSection
