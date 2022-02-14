import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="TicketDEX">
      <Container>
        <Title>
          TicketDEX <Badge>2022</Badge>
        </Title>
        <P> 🇺🇸 NFT ticketing platform for events happening in the USA. </P>
        <P>
          🇧🇷Plataforma de venda de ingressos em NFT para eventos acontecendo nos
          Estados Unidos.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Site</Meta>
            <Link href="https://ticketdex.io/">https://ticketdex.io/</Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, TypeScript, Next</span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/ticketdex.png" alt="TicketDex" />
      </Container>
    </Layout>
  )
}

export default Project
