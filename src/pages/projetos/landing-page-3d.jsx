import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Custom Keyboards">
      <Container>
        <Title>
          Custom Keyboards <Badge>2022</Badge>
        </Title>
        <P>
          Site com função de scroll e overlay de texto por seção. Inspirado na
          HomePage da Tesla porém feito de forma altamente customizável e
          componentizada. Assim, podemos trocar os títulos, botões e imagens de
          forma rápida e descomplicada.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Site</Meta>
            <Link href="https://scroll-behavior.netlify.app/">
              https://scroll-behavior.netlify.app/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, TypeScript</span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/works/custom-keyboards.gif"
          alt="Custom Keyboards"
        />
        <ProjectImage
          src="/images/works/customkeyboards.png"
          alt="Custom Keyboards"
        />
      </Container>
    </Layout>
  )
}

export default Project
