import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Menu from './components/Menu/Menu'
import DishList from './components/DishList/DishList'

export const API_URL = `${window.location.protocol}//${process.env.REACT_APP_SERVER_IP?.trim()}:${process.env.REACT_APP_SERVER_API_PORT?.trim()}`
export const IMAGE_API_URL = `${window.location.protocol}//${process.env.REACT_APP_SERVER_IP?.trim()}:${process.env.REACT_APP_SERVER_IMAGES_PORT?.trim()}`

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/dish/:dishId' element={<DishList/>}/>
                <Route
                    path='*'
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
