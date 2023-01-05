import { useState } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

export function ChatList({ onAddChat, chats }) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
    }

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <h1>ChatList</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit">Create Chat</button>
            </form>
        </>

    )
}