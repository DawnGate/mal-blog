import ProjectLayout from '@/components/layout/projectLayout'
import CustomText from '@/components/text'

const initData = {
  title: 'chat-app',
  titleText: 'Chat App',
  techStacks: ['nextjs13', 'firebase', 'mui', 'lottie'],
  previewImages: [
    {
      title: 'Chat app - login page',
      source: '/assets/images/projects/chat-app-login.png',
      description: '1. Login page of chat app with basic authentication using gmail and password.',
    },
    {
      title: 'Chat app - main page',
      source: '/assets/images/projects/chat-app-main.png',
      description: '2. View main page - after login successful, where you contact with friend and chills.',
    },
  ],
  typeProject: 'personal',
}
const ChatApp = () => {
  const descriptionBody = (
    <>
      <CustomText active={true} textIndent={8} marginBottom={1}>
        This is chat app I write for clone telegram. I see telegram interface and try to re implement those.
      </CustomText>
    </>
  )
  return <ProjectLayout {...initData} descriptionBody={descriptionBody} />
}

export default ChatApp

export { getServerSideProps } from '@/components/chakraui'
