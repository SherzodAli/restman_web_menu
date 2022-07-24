import CircularProgress from '@mui/material/CircularProgress'
import cls from './Loader.module.sass'

export default function Loader() {
    return (
        <div className={cls.loaderWrapper}>
            <CircularProgress size={70} />
        </div>
    )
}
