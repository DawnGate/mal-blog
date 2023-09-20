import { Card, CardBody, Link } from '@chakra-ui/react'
import NextImage from 'next/image'
import CustomText from './text'
import NextLink from 'next/link'
import TimeLabel from './timeLabel'

const CardItem = ({ imageSrc, imageAlt, linkHref, title, excerpt = '' }) => {
  return (
    <NextLink href={linkHref} passHref>
      <Link>
        <Card>
          <CardBody>
            {imageSrc && (
              <NextImage src={imageSrc} alt={imageAlt} width={250} height={200} priority objectFit="contain" />
            )}
            <CustomText fontWeight={500} mt={1} textAlign={'center'}>
              {title}
            </CustomText>
            {excerpt && <CustomText active={false}>{excerpt}</CustomText>}
          </CardBody>
        </Card>
      </Link>
    </NextLink>
  )
}

export const CardBlogItem = ({ linkHref, title, excerpt, date }) => {
  return (
    <NextLink href={linkHref} passHref>
      <Link variant="blogItem">
        <Card height="100%">
          <CardBody>
            <CustomText fontWeight={500} className="blog-item-title">
              {title}
            </CustomText>
            {excerpt && <CustomText active={false}>{excerpt}</CustomText>}
            {date && <TimeLabel dateString={date} />}
          </CardBody>
        </Card>
      </Link>
    </NextLink>
  )
}

export default CardItem
