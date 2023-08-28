import {useLoad} from '../../hooks/useLoad'
import Loader from '../Loader/Loader'
import GroupItem from '../GroupItem/GroupItem'
import cls from './Menu.module.sass'
import Container from '@mui/material/Container'
import {API_URL} from '../../App'
import Background from '../Background/Background'
import BG_IMAGE_DEFAULT from '../../static/bg.png'

export default function Menu() {
    const [menuGroups, isLoading] = useLoad({url: `${API_URL}/`}, [])
    const [bgImage, isLoadingBg] = useLoad({url: `${API_URL}/bg`}, {})

    if (isLoading || isLoadingBg) {
        return <Loader />
    }

    let bg = bgImage ? bgImage : BG_IMAGE_DEFAULT
    let showDefaultImage = !Boolean(bgImage)

    return (
        <Container>
            <Background image={bg} isDefault={showDefaultImage} />
            <h1 className={cls.title}>Меню</h1>
            <div className={cls.wrapper}>
                {menuGroups.map(group => (
                    <GroupItem dishId={group.ID} dishName={group.Name} onClick={() => {}} />
                ))}
            </div>
        </Container>
    )
}
