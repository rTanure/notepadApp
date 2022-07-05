import {Route, BrowserRouter, Routes} from 'react-router-dom'

import Home from './pages/Home'

export default function PageRouted() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
    
}