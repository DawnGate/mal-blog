import ProjectLayout from '@/components/layout/projectLayout'
import CustomText from '@/components/text'
import { Link } from '@chakra-ui/react'

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
      <CustomText active={true} marginBottom={1} letterSpacing="wider">
        Introduce:{' '}
      </CustomText>
      <CustomText active={false} marginBottom={0.5}>
        This is chat app I write for clone telegram. I see telegram interface and try to implement my own chat app with
        some ux borrow from telegram.
      </CustomText>
      <CustomText active={false} marginBottom={0.5}>
        The idea began when the first time I saw the introduce about nextjs 13 in the{' '}
        <Link href="https://dev.to" color="teal.500" isExternal>
          dev.to
        </Link>
        . I want to enjoy with new tech and have a chat product make me feel more comfortable and want to use like other
        chats product in the market.
      </CustomText>
      <CustomText active={false} marginBottom={0.5}>
        I using mui as my ui library because I family with it, and will make sure product not too long for release. With
        a chat app, this mean real time response, so I chose firebase as a real time database and nextjs api to handle
        action with interact with database.
      </CustomText>
      <CustomText active={true} marginBottom={1} letterSpacing="wider">
        Current:{' '}
      </CustomText>
      <CustomText active={false} marginBottom={0.5}>
        This project separate to 3 steps. The first time is building authentication and simple p2p chat. It already done
        first stage. You can view it in:{' '}
        <Link href="https://github.com/DawnGate/chat-app" color="teal.500" isExternal>
          chat_app_github
        </Link>
      </CustomText>
      <CustomText active={true} marginBottom={1} letterSpacing="wider">
        Plan:{' '}
      </CustomText>
      <CustomText active={false} marginBottom={0.5}>
        The planing of this project in the road map section in readme.md file of github repository. But the project
        focus on chat p2p, group and will more and more feature to support this two main value.
      </CustomText>
    </>
  )
  return <ProjectLayout {...initData} descriptionBody={descriptionBody} />
}

export default ChatApp

export { getServerSideProps } from '@/components/chakraui'
