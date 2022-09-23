import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { App } from './app'
import './index.sass'

const container = document.getElementById('app')

// Create a root.
const root = container && ReactDOMClient.createRoot(container)

// Initial render: Render an element to the root.
root?.render(<App />)

// During an update, there's no need to pass the container again.
root?.render(<App />)
