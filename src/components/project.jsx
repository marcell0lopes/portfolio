import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box mt={4}>
    <NextLink href="/projetos">
      <Link>Projetos</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} my={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mt={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
