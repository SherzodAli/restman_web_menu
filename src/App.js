import Menu from './components/Menu/Menu'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DishList from './components/DishList/DishList'
import {useEffect} from "react";

export const API_URL = `${window.location.protocol}//${process.env.REACT_APP_SERVER_IP?.trim()}:${process.env.REACT_APP_SERVER_API_PORT?.trim()}`
export const IMAGE_API_URL = `${window.location.protocol}//${process.env.REACT_APP_SERVER_IP?.trim()}:${process.env.REACT_APP_SERVER_IMAGES_PORT?.trim()}`

export default function App() {
    console.log(IMAGE_API_URL + '/1.jpg')

    // useEffect(() => {
    //     document.body.style.backgroundImage = `url(${IMAGE_API_URL + '/moroccan-flower.png'})`
    //     document.body.style.backgroundRepeat = 'no-repeat'
    //     document.body.style.backgroundSize = 'cover'
    // }, [])


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
