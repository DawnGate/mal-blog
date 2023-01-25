import { Card, CardBody, Image, Link } from '@chakra-ui/react'
import CustomText from './text'
import NextLink from 'next/link'
import TimeLabel from './timeLabel'

const CardItem = ({ imageSrc, imageAlt, linkHref, title, excerpt }) => {
  return (
    <Link as={NextLink} href={linkHref}>
      <Card>
        <CardBody>
          {imageSrc && <Image src={imageSrc} alt={imageAlt} />}
          <CustomText fontWeight={500}>{title}</CustomText>
          {excerpt && <CustomText active={false}>{excerpt}</CustomText>}
        </CardBody>
      </Card>
    </Link>
  )
}

export const CardBlogItem = ({ linkHref, title, excerpt, date }) => {
  return (
    <Link as={NextLink} href={linkHref} variant="blogItem">
      <Card>
        <CardBody>
          <CustomText fontWeight={500} className="blog-item-title">
            {title}
          </CustomText>
          {excerpt && <CustomText active={false}>{excerpt}</CustomText>}
          {date && <TimeLabel dateString={date} />}
        </CardBody>
      </Card>
    </Link>
  )
}

export default CardItem
