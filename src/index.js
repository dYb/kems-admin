import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'reactstrap'
import Layout from './layout'

const button = () => {
  return <Layout />
}
ReactDom.render(button(), document.getElementById('root'))
