import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from '././components/todo/App1'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App1 />)
