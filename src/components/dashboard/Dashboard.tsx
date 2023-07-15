
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import CustomTabPanel from ''

import InboxOutlined from '@mui/icons-material/InboxOutlined'
import ContactsOutlined from '@mui/icons-material/ContactsOutlined'
import PersonOutline from '@mui/icons-material/PersonOutline'

import MenuIcon from '@mui/icons-material/Menu'

import { useAppSelector } from '../../app/hooks'

export const Dashboard = (): JSX.Element => {

  const [state, setState] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setState(newValue);
  };

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <InboxOutlined />
          </IconButton>
          <IconButton>
            <ContactsOutlined />
          </IconButton>
          <IconButton>
            <PersonOutline />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Tabs value={state} onChange={handleChange}>
        <Tab />
      </Tabs>

      <CustomTabPanel></CustomTabPanel>

    </div>
  )
}