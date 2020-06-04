import React from 'react'

import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu fixed='top' color={'orange'} inverted>
      <Container fluid>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo192.png' style={{ marginRight: '1.5em' }} />
        Sanskrit Projects Explorer
      </Menu.Item>
        <Menu.Item as={Link} to={'/'}>Home</Menu.Item>
        <Menu.Item as={Link} to={'/sanscript'}>Sanscript</Menu.Item>
      </Container>
    </Menu>
  )
}
export default NavBar