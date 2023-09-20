import NextLink from 'next/link'
import Image from 'next/image'

import { Box, Link } from '@chakra-ui/react'
import CustomText from './text'
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
        <NextLink href={GITHUB_LINK} passHref>
          <Link color="teal.500" isExternal>
            Github
          </Link>
        </NextLink>
      </Box>
      <Box>
        <NextLink href={LINKEDIN_LINK} passHref>
          <Link color="teal.500" isExternal>
            Linkedin
          </Link>
        </NextLink>
      </Box>
    </Box>
  )
}

const BioSection = () => {
  return (
    <section>
      <BioBox>
        <Image src="/assets/images/profile.jpg" alt="profile" height={400} width={600} priority />
        <CustomText textAlign={'center'} fontWeight={600} active={false}>
          &quot;Every day is an adventure.&quot;
        </CustomText>
      </BioBox>
      <BioBox>
        <BioHeader title="About me" />
        <BioBody
          introduce="Hi, I'm Quyen Lam, my name signifies 'natural' and 'mountain'. I'm a computer science engineer with a passion for frontend development, specialize React and React ecosystem. I'm love to improve product from UI,UX, ... to performance.  
       I take pleasure in problem-solving, exploring software architecture and applying lessons learned from past experiences to prevent future issues. My primary goal is to continue learning more as I can. 
        "
        />
      </BioBox>
      <BioBox>
        <BioHeader title="The value I live by" />
        <BioBody introduce="Courage - I solve many problem and pass through my fears to find the right path with the courage." />
        <BioBody introduce="Professionalism - Try to get the better and better, I'm always think how to professional in what I do and what I will do. Create value for product and for me, from this 'value' I gain more experiences." />
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
