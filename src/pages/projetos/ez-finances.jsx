import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="ezFinances">
      <Container>
        <Title>
          ezFinances <Badge>2021</Badge>
        </Title>
        <P>
          Projeto simples para aplicar conhecimentos de SASS(SCSS) e
          conceitos-front end. Utilizando JavaScript puro para toda a
          funcionalidade do site, como adicionar e remover transações, mostrar
          as informações de conta em tempo real na tela e manter os dados salvos
          no armazenamento local do usuário.{' '}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Site</Meta>
            <Link href="https://marcell0lopes.github.io/ez-finances/">
              https://marcell0lopes.github.io/ez-finances/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, SCSS, JavaScript</span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/works/ezfinances.gif"
          alt="Ez Finances New Transaction"
        />
        <ProjectImage
          src="/images/works/ez-finances.png"
          alt="Ez Finances home screen"
        />
      </Container>
    </Layout>
  )
}

export default Project
