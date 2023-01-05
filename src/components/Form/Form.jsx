import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
// import { Button } from '../ui/Button'
import IButton from '@mui/material/Button'

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('input', text)
        addMessage({
            author: AUTHOR.user,
            text
        })

        setText('')
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                {/* <Button type="submit">Add message</Button> */}
                <IButton
                    variant='contained'
                    color='success'
                    size='small'
                    type="submit"
                >
                    Add message
                </IButton>
            </form>
        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}