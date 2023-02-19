import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Match } from '../pages/Match'
import { Home } from '../pages/Home'
import { History } from '../pages/History'

export function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/match' element={<Match />} />
                <Route path='/history' element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}   