import CustomText from './text'
import { format, parseISO } from 'date-fns'

const TimeLabel = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <CustomText fontSize="small" active={false}>
      {format(date, 'LLLL do, yyyy')}
    </CustomText>
  )
}

export default TimeLabel
