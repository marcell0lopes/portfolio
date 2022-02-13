import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import customKeyboardThumb from '../../public/images/works/customkeyboards.png'
import yelpcampThumb from '../../public/images/works/yelpcamp.png'

const Projetos = () => {
  return (
    <Container>
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
            thumbnail={yelpcampThumb}
          >
            Web App de controle financeiro feito com HTML, SCSS e JavaScript.
            <br /> As informações são salvas no armazenamento do navegador para
            o usuário registrar suas finanças com maior controle e segurança ao
            decorrer do tempo.
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
            thumbnail={customKeyboardThumb}
          >
            The Number One #NFT ticketing platform for IRL and #Metaverse
            events. Built on the carbon neutral #WAX #Blockchain
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="landing-page-3d"
            title="Landing Page 3D"
            thumbnail={customKeyboardThumb}
          >
            <small>(ainda em desenvolvimento)</small>
            <br /> Landing page para lançamento musical de artista brasileiro
            feito com Next.JS e objeto 3D interativo feito com @react-three
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projetos
