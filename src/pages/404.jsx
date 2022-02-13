import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" mt={4}>
        Página não encontrada
      </Heading>
      <Text mt={4}>
        Ops... A página que você estava procurando não foi encontrada.
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retornar para a Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
