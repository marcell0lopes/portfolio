import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Yelp Camp">
      <Container>
        <Title>
          Yelp Camp <Badge>2021</Badge>
        </Title>
        <P>
          O YelpCamp é uma plataforma online responsiva onde seus usuários podem
          adicionar, comentar e avaliar Campings, que são automaticamente
          localizados no mapa utilizando a API do MapBox. Esse é o projeto final
          do curso "The Web Developer Bootcamp 2022" por Colt Steele na Udemy. O
          YelpCamp é uma plataforma online responsiva onde seus usuários podem
          adicionar, comentar e avaliar Campings, que são automaticamente
          localizados no mapa utilizando a API do MapBox. Esse é o projeto final
          do curso "The Web Developer Bootcamp 2022" por Colt Steele na Udemy.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Site</Meta>
            <Link href="https://mysterious-atoll-72579.herokuapp.com/">
              https://mysterious-atoll-72579.herokuapp.com/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              HTML, CSS (Bootstrap), JavaScript, MongoDB, Node.JS, Passport, Joi
              & EJS Mate
            </span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/works/yelpcamp.gif"
          alt="Yelp Camp Register and Review"
        />
        <ProjectImage src="/images/works/yelpcamp.png" alt="Custom Keyboards" />
      </Container>
    </Layout>
  )
}

export default Project
