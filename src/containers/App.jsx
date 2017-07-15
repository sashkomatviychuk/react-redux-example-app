import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Posts from './Posts'

// TODO: error handling
// TODO: menu
const App = (props) => (
    <BrowserRouter>
        <Route path="/" component={Posts} />
    </BrowserRouter>
);

export default App;
