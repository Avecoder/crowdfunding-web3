import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import {StateContextProvider } from './context'

const activeChain = "goerli"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThirdwebProvider activeChain={activeChain}>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </ThirdwebProvider>
    </React.StrictMode>
  </ BrowserRouter>
)
