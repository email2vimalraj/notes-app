import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

import remark from 'remark'
import remark2react from 'remark-react'

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  width: 80%;
`

const Note = styled.div`
  border: 1px solid ${props => !props.theme.background};
  line-height: 20px;
  display: flex;
  flex-direction: column;
`

const NoteHeader = styled.div`
  display: flex;
  background: ${props => props.theme.secondaryBackground};
  font-size: 12px;
  justify-content: space-between;
  padding: 10px;
`

const NoteBody = styled.div`
  padding: 10px;

  &:focus {
    border: 3px solid red;
  }
`

function convertToHtml(text) {
  const result = remark()
    .use(remark2react)
    .processSync(text).contents
  console.log(result)
  return result
}

function NoteContainer() {
  const [text, setText] = useState('')
  const [editable, setEditable] = useState(false)
  const contentEditable = useRef()

  // useEffect(() => {
  //   convertToHtml(text)
  // }, [text])

  const onFocus = () => {
    setEditable(true)
  }

  const onChange = e => {
    setText(e.target.value)
  }

  return (
    <AppContainer>
      <Row>
        <Note>
          <NoteHeader>
            <span>Apr 17, 2019 at 12:07 AM</span>
            <span>Icons</span>
          </NoteHeader>
          {/* <NoteBody
            onFocus={onFocus}
            onInput={e => onChange(e)}
            onBlur={e => {
              onChange(e)
              setEditable(false)
            }}
            contentEditable={true}
            suppressContentEditableWarning
          >
            {editable ? text : convertToHtml(text)}
          </NoteBody> */}

          <ContentEditable
            innerRef={contentEditable}
            html={convertToHtml(text).toString()} // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onChange={onChange} // handle innerHTML change
            tagName="div"
          />
        </Note>
      </Row>
    </AppContainer>
  )
}

export default NoteContainer
