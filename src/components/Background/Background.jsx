import cls from './Background.module.sass'
import {IMAGE_API_URL} from '../../App'


export default function Background({image, isDefault = true}) {
    let imgPath = isDefault ? image : IMAGE_API_URL + '/' + image
    return <div className={cls.bg} style={{backgroundImage: `url(${imgPath})`}} />
}
