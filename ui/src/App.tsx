import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query'
import BasePage from './pages/BasePage/BasePage';
import './App.css';

const queryClient = new QueryClient()

function App() {
    return (
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div className="App">
                        <BasePage />
                    </div>
                </BrowserRouter>
            </QueryClientProvider>
        </React.StrictMode>
    );
}

export default App;
