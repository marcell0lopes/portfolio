import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FaDev } from 'react-icons/fa'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('pink.500', 'blue.500')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            &lt;{' '}
            <Text
              display="inline"
              color={useColorModeValue('blue.500', 'whiteAlpha.900')}
            >
              MarcelloLopes
            </Text>{' '}
            /&gt;
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
