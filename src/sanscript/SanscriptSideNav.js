import React from 'react'

import { Input, Label, Menu } from 'semantic-ui-react'

import {
  Link,
  useRouteMatch,
} from "react-router-dom";

const SanscriptSideNav = () => {
  let match = useRouteMatch();

  return (

    <Menu secondary vertical fluid>

      <Menu.Item
        as={Link}
        name='trans'
        to={`${match.url}/translations`}
      >
        Translations
    </Menu.Item>

    </Menu>

  )
}
export default SanscriptSideNav