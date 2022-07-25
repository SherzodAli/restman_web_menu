import {useParams} from 'react-router-dom'
import {useLoad} from '../../hooks/useLoad'
import Loader from '../Loader/Loader'
import DishItem from '../DishItem/DishItem'
import GroupItem from '../GroupItem/GroupItem'
import Container from '@mui/material/Container'
import cls from '../Menu/Menu.module.sass'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import clsDish from './DishList.module.sass'
import {API_URL} from '../../App'

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

    if (isLoading || loadingNew) {
        return <Loader />
    }

    const setNewMenu = () => setLoadingNew(true)

    function back() {
        setNewMenu()
        navigate(-1)
    }

    return (
        <Container>
            <h2 className={clsDish.title}>
                <KeyboardBackspaceOutlinedIcon
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
