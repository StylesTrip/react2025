import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useAuth} from "@/lib/auth";
import {Button, Heading, Text, Code} from "@chakra-ui/react";

const Home = () => {
  const auth = useAuth()

  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>
          Fast Feedback
        </Heading>

        <Text>
          Current user: <Code>{auth?.user?.email}</Code>
        </Text>

        {!auth.user && (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
        

        {auth?.user && (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        )}
      </main>

    </div>
  )
};

export default Home;
