import {useLoad} from '../../hooks/useLoad'
import Loader from '../Loader/Loader'
import GroupItem from '../GroupItem/GroupItem'
import cls from './Menu.module.sass'
import Container from '@mui/material/Container'

export default function Menu() {
    const [menuGroups, isLoading] = useLoad({url: 'http://192.168.0.103:8000/'}, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <Container>
            <h1 className={cls.title}>Меню</h1>
            <div className={cls.wrapper}>
                {menuGroups.map(group => (
                    <GroupItem dishId={group.ID} dishName={group.Name} />
                ))}
            </div>
        </Container>
    )
}
