import cls from './Background.module.sass'
import {IMAGE_API_URL} from '../../App'


export default function Background({image}) {
    return <div className={cls.bg} style={{backgroundImage: `url(${IMAGE_API_URL + image})`}} />
}
