import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useAuth} from "@/lib/auth";
import {Button, Flex, Heading, Text, Code, Icon} from "@chakra-ui/react";

const Home = () => {
  const auth = useAuth()

  return (
    <Flex
    as="main" 
    direction="column" 
    align="center" 
    justify="center" 
    h="100vh">
      <Head>
        <title>Fast Feedback</title>
      </Head>
        <Heading>
          Fast Feedback
        </Heading>
        {/* <Icon color="black" name="logo" size="64px" /> */}
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} variant="link" size="sm" onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
    </Flex>
  )
};

export default Home;
