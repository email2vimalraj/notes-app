import React, { useState, useEffect } from 'react'
import remark from 'remark'
import remark2react from 'remark-react'

import {
  ButtonSpan,
  Container,
  NoteHeader,
  StyledTextarea,
  NotePreviewBody
} from './styles'

function EditContainer({ text, ...props }) {
  return <StyledTextarea defaultValue={text} {...props} />
}

function ViewContainer({ text }) {
  return <NotePreviewBody>{text}</NotePreviewBody>
}

function NotesContainer({ note, idx, onDelete }) {
  const initialState =
    window.localStorage.getItem(`note-${idx}`) ||
    '# Hello World\n\n```javascript\nconst text="Hello"\n```'
  const [text, setText] = useState(initialState)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(`note-${idx}`, text)

    return () => {
      window.localStorage.removeItem(`note-${idx}`)
    }
  }, [text, idx])

  const createdOn = new Date(note.createdOn)
  let date = createdOn.getDate()
  let month = createdOn.getMonth() + 1
  const yyyy = createdOn.getFullYear()

  let hours = createdOn.getHours()
  const minutes = createdOn.getMinutes()
  let seconds = createdOn.getSeconds()

  if (date < 10) {
    date = `0${date}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  hours = hours > 12 ? hours - 12 : hours < 10 ? '0' + hours : hours

  const formattedDate = `${date}-${month}-${yyyy} ${hours}:${minutes}:${seconds} ${
    createdOn.getHours() > 12 ? 'PM' : 'AM'
  }`

  const onToggle = () => {
    setEdit(!edit)
  }

  return (
    <>
      <Container>
        <NoteHeader>
          <span>{formattedDate}</span>
          <div>
            {edit ? (
              <ButtonSpan
                role="img"
                aria-label="preview"
                onClick={() => onToggle()}
              >
                👌
              </ButtonSpan>
            ) : (
              <ButtonSpan
                role="img"
                aria-label="edit"
                onClick={() => onToggle()}
              >
                ✍️
              </ButtonSpan>
            )}
            <ButtonSpan
              role="img"
              aria-label="delete"
              onClick={() => onDelete()}
            >
              🗑️
            </ButtonSpan>
          </div>
        </NoteHeader>
        {edit ? (
          <EditContainer text={text} onChange={e => setText(e.target.value)} />
        ) : (
          <ViewContainer
            text={
              remark()
                .use(remark2react)
                .processSync(text).contents
            }
          />
        )}
      </Container>
    </>
  )
}

export default NotesContainer
