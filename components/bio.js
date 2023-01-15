import { Box, Image, Link } from '@chakra-ui/react'
import CustomText from './text'
import NextLink from 'next/link'
import { GITHUB_LINK, LINKEDIN_LINK } from '../config/consts'

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
    <Box textIndent={8} fontWeight={700}>
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
          &quot;Every day is a adventure for him.&quot;
        </CustomText>
      </BioBox>
      <BioBox>
        <BioHeader title="Hello, My name is Quyen Lam, I'm a computer science engineering" />
        <BioBody
          introduce="Currently, My job is a frontend developer. I'm love to improve product from UI,UX, ... to performance. 
       With a future become a full-stack developer with a senior knowledge and skill is my target for now. 
       I love solve problem, learning architecture and avoid problem from learning the failure. 
        "
        />
      </BioBox>
      <BioBox>
        <BioHeader title="The value I live by" />
        <BioBody introduce="Courage - I solve many problem and pass through the scare to find the path with the courage. If with not that I can't be like now." />
        <BioBody introduce="Professional - Try to get the better and better, be professional in what you doing. Create something is value." />
      </BioBox>
      <BioBox>
        <BioHeader title="My hobbies" />
        <BioBody introduce="Running, swimming, reading books, listen musics and cooking 🤫 some new disk can't kill you from the look." />
      </BioBox>
      <BioBox>
        <BioHeader title="How to find me" />
        <BioContact />
      </BioBox>
    </section>
  )
}

export default BioSection
