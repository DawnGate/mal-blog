import ProjectLayout from '@/components/layout/projectLayout'
import CustomText from '@/components/text'
import { ListItem, UnorderedList } from '@chakra-ui/react'

const initData = {
  title: 'edvin-app',
  titleText: 'Edvin App',
  techStacks: ['react', 'firebase', 'mui', 'react-query', 'react-context'],
  previewImages: [
    {
      title: 'Edvin app - home page',
      source: '/assets/images/projects/edvin-app-main.png',
      description:
        '1. This is home page for role student when first time login, this make student can contact or enjoy more through join room where they can leaning together.',
    },
    {
      title: 'Edvin app - role selection page',
      source: '/assets/images/projects/edvin-app-role-selection.png',
      description: '2. Role selection page - with all role in 1 app, this project current support in 4 role.',
    },
  ],
  typeProject: 'company',
}
const ChatApp = () => {
  const descriptionBody = (
    <>
      <CustomText active={true} textIndent={8} marginBottom={1}>
        This is a product of my company. This product focus on how to help student enjoy learning and teacher easy in
        teaching. More and more feature will add to focus on this value.
      </CustomText>

      <CustomText active={false} textIndent={8} marginBottom={1}>
        My role is a frontend core team. Start from first day of company. I control all features of this app. Some of my
        big contribute can lists in here:
      </CustomText>
      <UnorderedList>
        <ListItem>
          <CustomText active={false}>Improve performance from the size 2mb gzip to limit as 400 kb.</CustomText>
        </ListItem>
        <ListItem>
          <CustomText active={false}>
            Restructure app for apply standard eslint, prettier and structure focus on components make easy when
            develop.
          </CustomText>
        </ListItem>
        <ListItem>
          <CustomText active={false}>Maintain role base context system of the app.</CustomText>
        </ListItem>
      </UnorderedList>
      <CustomText active={false} textIndent={8} marginBottom={1}>
        After long time doing with react. Now, I focus on create package with react. I enjoyed it and believe that
        project will go far.
      </CustomText>
    </>
  )
  return <ProjectLayout {...initData} descriptionBody={descriptionBody} />
}

export default ChatApp

export { getServerSideProps } from '@/components/chakraui'
