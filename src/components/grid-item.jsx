import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w="100%"
    align="left"
    background={'transparent'}
    boxShadow="md"
    borderRadius={10}
    overflow="hidden"
  >
    <NextLink href={`/projetos/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />

        <LinkOverlay href={`/projetos/${id}`}>
          <Text mt={2} fontSize={20} fontWeight="bold" color="#88CCCA" px={4}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} p={4}>
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail {
    border-radius: 12px;
    
  }
  `}
  />
)
