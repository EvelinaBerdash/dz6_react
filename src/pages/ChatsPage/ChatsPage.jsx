import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'
import { ChatList } from '../../components/ChatsList/ChatList'

import { AUTHOR } from '../../constants'

import { WithClasses } from '../../HOC/WithClasses'
// import { useSelector } from 'react-redux'
import styles from './ChatsPage.module.css'

export function ChatsPage({ onAddChat, onAddMessage, messages, chats }) {
    // const [messages, setMessages] = useState([])
    const { chatId } = useParams()

    const MessageListWithClass = WithClasses(MessageList)
    // const addMessage = (newMessage) => {
    //     console.log('newMessage', newMessage);
    //     setMessages([...messages, newMessage])
    // }


    useEffect(() => {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
            ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.bot,
                    text: 'hello'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (massage) => {
        if (chatId) {
            onAddMessage(chatId, massage)
        }
    }

    if (chatId && !messages[chatId]) {
        return <Navigate to='/chats' replace />
    }
    return (
        <>
            <h1>Welcome to chat</h1>
            <ChatList chats={chats} onAddChat={onAddChat} />
           
            {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
            <MessageListWithClass 
                messages={chatId ? messages[chatId] : []}
                classes={styles.border}
            />
             <Form addMessage={handleAddMessage} />
        </>
    )
}

