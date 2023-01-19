import { Card, CardBody, Image, Link } from '@chakra-ui/react'
import CustomText from './text'
import NextLink from 'next/link'

const CardItem = ({ imageSrc, imageAlt, linkHref, title }) => {
  return (
    <Card>
      <CardBody>
        <Image src={imageSrc} alt={imageAlt} />
        <Link as={NextLink} href={linkHref}>
          <CustomText fontWeight={500}>{title}</CustomText>
        </Link>
      </CardBody>
    </Card>
  )
}

export default CardItem
