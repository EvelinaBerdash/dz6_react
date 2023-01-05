import { Routes, Route } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { Header } from "./components/Header/Header"
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { ChatList } from './components/ChatsList/ChatList'
import { useState } from 'react'
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { Provider } from 'react-redux'
import { store } from './store'

const defaultMessages = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    }
  ]
}

export function App() {
  const [messages, setMessages] = useState(defaultMessages)
  const [theme, setTheme] = useState(defaultContext.theme)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      {/* <Header /> */}
      <Provider store={store}>
        <ThemeContext.Provider value={{
          theme,
          toggleTheme
        }}>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<MainPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='chats'>
                <Route index element={<ChatList />} />
                <Route 
                  path=':chatId' 
                  element={<ChatsPage />} 
                />
              </Route>
            </Route>

            <Route path='*' element={<h2>404 Page not FOUND</h2>} />
          </Routes>
        </ThemeContext.Provider>
      </Provider>
    </>
  )
}

export default App