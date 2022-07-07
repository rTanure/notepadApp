import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Error404 from './pages/Error404'
import Note from './pages/Note'

export default function PageRouted() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/note/:id" element={<Note />}/>
                <Route path="/*" element={< Error404/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}