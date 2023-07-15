
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import { CreateUserPage } from '../features/users/CreateUser'
import { Profile } from '../features/users/Profile'

import { CreateConversation } from '../features/conversations/CreateConversation'
import { Conversation } from '../features/conversations/Conversation'

import { Dashboard } from '../components/dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: App()
  },
  {
    path: '/register',
    element: <CreateUserPage />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/conversation',
    element: <CreateConversation />
  },
  {
    path: '/conversation/:uid',
    element: <Conversation />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

export default router
