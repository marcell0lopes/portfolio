import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Landing Page 3D">
      <Container>
        <Title>
          Landing Page 3D<Badge>2022</Badge>
        </Title>
        <P>
          Site com integração a 3D interativo e animado. O site incorpora um
          modelo 3D utilizado no clipe de lançamento do artista. O site e o
          artista não serão divulgados até o lançamento do clipe por direitos
          autorais.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next, Three.JS</span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/works/secret.png"
          alt="3D Landing Page com Blur"
        />
      </Container>
    </Layout>
  )
}

export default Project
