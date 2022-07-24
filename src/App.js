import Menu from './components/Menu/Menu'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DishList from './components/DishList/DishList'

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Menu />} />
                    <Route path='/dish/:dishId' element={<DishList />} />
                    <Route
                        path='*'
                        element={
                            <div>
                                <h2>404 Page not found</h2>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
