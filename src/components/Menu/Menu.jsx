import {useLoad} from '../../hooks/useLoad'
import Loader from '../Loader/Loader'
import GroupItem from '../GroupItem/GroupItem'
import cls from './Menu.module.sass'
import Container from '@mui/material/Container'
import {API_URL} from '../../App'
import Background from '../Background/Background'


export default function Menu() {
    const [menuGroups, isLoading] = useLoad({url: `${API_URL}/`}, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <Container>
        <Background image={'/moroccan-flower.png'} />
            <h1 className={cls.title}>Меню</h1>
            <div className={cls.wrapper}>
                {menuGroups.map(group => (
                    <GroupItem dishId={group.ID} dishName={group.Name} />
                ))}
            </div>
        </Container>
    )
}
