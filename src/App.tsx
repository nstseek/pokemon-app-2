import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StyledText } from './App.styled'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                        <StyledText>What</StyledText>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </QueryClientProvider>
    )
}

export default App
