import {useEffect, useState} from 'react'

import {useNavigate, useParams} from 'react-router-dom'
import Container from '@mui/material/Container'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'

import {API_URL} from '../../App'
import {useLoad} from '../../hooks/useLoad'
import Loader from '../Loader/Loader'
import DishItem from '../DishItem/DishItem'
import GroupItem from '../GroupItem/GroupItem'
import cls from '../Menu/Menu.module.sass'
import clsDish from './DishList.module.sass'
import Background from '../Background/Background'
import BG_IMAGE_DEFAULT from '../../static/bg.png'


export default function DishList() {
    const navigate = useNavigate()
    const params = useParams()
    const [menuInfo, isLoading] = useLoad(
        {
            url: `${API_URL}/dishes`,
            params: {partOfMenu: params?.dishId},
            reloadParam: params?.dishId
        },
        {}
    )
    const [bgImage, isLoadingBg] = useLoad({url: `${API_URL}/bg`}, {})

    const [loadingNew, setLoadingNew] = useState(false)
    const [folders, setFolders] = useState([])
    const [dishes, setDishes] = useState([])
    const [groupName, setGroupName] = useState('Меню')

    useEffect(() => {
        if (menuInfo.menuGroups) {
            setFolders(prevState => menuInfo?.menuGroups)
            setDishes(prevState => menuInfo?.menuDishes)
            setGroupName(prevState => menuInfo?.groupName)
            setLoadingNew(false)
        }
    }, [menuInfo])

    if (isLoading || loadingNew || isLoadingBg) {
        return <Loader />
    }

    const setNewMenu = () => setLoadingNew(true)

    function back() {
        setNewMenu()
        navigate(-1)
    }

    let bg = bgImage ? bgImage : BG_IMAGE_DEFAULT
    let showDefaultImage = !Boolean(bgImage)

    return (
        <Container>
            <Background image={bg} isDefault={showDefaultImage} />
            <h2 className={clsDish.title}>
                <KeyboardBackspaceOutlinedIcon
                    style={{fontSize: 40}}
                    onClick={back}
                    className={clsDish.backArrow}></KeyboardBackspaceOutlinedIcon>
                {groupName}
            </h2>
            <div className={cls.wrapper}>
                {folders.map(group => (
                    <GroupItem dishId={group.ID} dishName={group.Name} onClick={setNewMenu} />
                ))}
            </div>
            <br />
            <div className={cls.wrapperCenter}>
                {dishes.map(dish => (
                    <DishItem
                        dishId={dish.ID}
                        dishName={dish.Name}
                        dishPhotoList={dish?.photo}
                        dishPrice={dish?.PriceForMenu}
                        dishDescription={dish?.description}
                        dishIngredients={dish?.ingredients}
                    />
                ))}
            </div>
        </Container>
    )
}
