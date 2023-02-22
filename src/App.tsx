import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header, Wrapper } from './App.styled';
import { Router } from './Router';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Wrapper>
                    <Header>Pokemons</Header>
                    <Router />
                </Wrapper>
            </div>
        </QueryClientProvider>
    );
}

export default App;
