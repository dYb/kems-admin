import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'reactstrap'

const button = (props) => {
  return (
    <Button color="danger">Danger!</Button>
  )
}
ReactDom.render(button(), document.getElementById('root'))
