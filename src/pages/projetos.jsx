import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import customKeyboardThumb from '../../public/images/works/customkeyboards.png'
import yelpcampThumb from '../../public/images/works/yelpcamp.png'
import ezFinancesThumb from '../../public/images/works/ez-finances.png'
import ticketDexThumb from '../../public/images/works/ticketdex.png'
import secretThumb from '../../public/images/works/secret.png'
import Head from 'next/head'

const Projetos = () => {
  return (
    <Container>
      <Head>
        <title> Marcello Lopes - Projetos </title>
      </Head>
      <Heading as="h3" fontSize={20} mt={2} mb={4}>
        Projetos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="custom-keyboards"
            title="Custom Keyboards"
            thumbnail={customKeyboardThumb}
          >
            Site com overlay que muda de acordo com a seção, scroll suave entre
            seções. Feito com React e TypeScript
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="yelp-camp"
            title="Yelp Camp"
            thumbnail={yelpcampThumb}
          >
            Plataforma de review de campings. Onde os usuários podem adicionar e
            remover campings, avaliá-los e comentar. Feito com Node.JS e EJS.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ez-finances"
            title="ezFinance$"
            thumbnail={ezFinancesThumb}
          >
            Web App de controle financeiro feito com HTML, SCSS e JavaScript.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mt={6} mb={4}>
        Onde estou colaborando:
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="ticketdex"
            title="TicketDEX"
            thumbnail={ticketDexThumb}
          >
            The Number One #NFT ticketing platform for IRL and #Metaverse
            events. Built on the carbon neutral #WAX #Blockchain
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="landing-page-3d"
            title="Landing Page 3D"
            thumbnail={secretThumb}
          >
            Landing page para lançamento musical de artista brasileiro feito com
            Next.JS e objeto 3D interativo feito com @react-three
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projetos
