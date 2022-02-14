import NextLink from 'next/link'
import {
  Container,
  Icon,
  Box,
  Heading,
  Image,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoAt
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={3}
          align="center"
        >
          👋 Olá! Eu sou o Marcello, prazer em te conhecer!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Marcello Lopes
            </Heading>
            <p>Desenvolvedor Web</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Section delay={1}>
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/marcellolopes.jpeg"
                alt="profile image"
              />
            </Section>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Sobre
          </Heading>
          <Paragraph>
            <NextLink href="www.linkedin.com/in/marcellolopes30">
              <Link>Marcello Lopes</Link>
            </NextLink>{' '}
            é desenvolvedor front-end. Focado na transição de carreira de Web
            Designer para Desenvolvedor Web completo. Criando soluções
            mobile-first com as melhores práticas, obtendo resultados de alta
            performance e acessibilidade.
            <br />
            <br />A bagagem com Web Design permite ter um olhar cuidadoso com os
            mínimos detalhes nas interfaces desenvolvidas e atenção com a
            experiência do usuário como um todo.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projetos">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projetos
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            🎉 &nbsp; <BioYear> 2021 - até hoje</BioYear>
            Desenvolvedor Web.
          </BioSection>
          <BioSection>
            📸 &nbsp;
            <BioYear> 2018</BioYear>
            Trabalhei Designer/Fotógrafo na{' '}
            <NextLink href="https://www.maze.com.br/">
              <Link>Maze</Link>
            </NextLink>
            .
          </BioSection>
          <BioSection>
            🖌 &nbsp;
            <BioYear> 2015</BioYear>
            Comecei a trabalhar como Designer no{' '}
            <NextLink href="https://grupotecnowise.com.br/">
              <Link>Grupo Tecnowise</Link>
            </NextLink>
            .
          </BioSection>
          <BioSection>
            🎓 &nbsp;
            <BioYear> 2019</BioYear>
            Me formei em Comunicação Social pela UNIP.
          </BioSection>
          <BioSection>
            👶 &nbsp;&nbsp;
            <BioYear>1997</BioYear>
            Nasci em São Paulo, Brasil.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Eu &#9829;
          </Heading>
          <Paragraph>
            Arte, Música, Fotografia, Tocar Baixo, Jogos e Viajar!
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link
                href="mailto:marcell0lopes@outlook.com?subject=Contato%20via%20portfolio%20-%20Vamos%20Conversar"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoAt} />}
                >
                  marcell0lopes@outlook.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.github.com/marcell0lopes" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @marcell0lopes
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com.br/in/marcellolopes30"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  /in/marcellolopes30
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.twitter.com/marcell0lopes"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @marcell0lopes
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
