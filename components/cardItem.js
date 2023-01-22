import { Card, CardBody, Image, Link } from '@chakra-ui/react'
import CustomText from './text'
import NextLink from 'next/link'

const CardItem = ({ imageSrc, imageAlt, linkHref, title }) => {
  return (
    <Link as={NextLink} href={linkHref}>
      <Card>
        <CardBody>
          <Image src={imageSrc} alt={imageAlt} />
          <CustomText fontWeight={500}>{title}</CustomText>
        </CardBody>
      </Card>
    </Link>
  )
}

export default CardItem
