import React, {useState} from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import {styled} from '@mui/material/styles'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper/core'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import cls from './DishItem.module.sass'
import {IMAGE_API_URL} from '../../App'
import {SECONDARY_COLOR} from '../../utils/theme'

SwiperCore.use([Scrollbar, Pagination, Navigation])

const getListTrueLength = list => list?.filter(el => el !== null).length
const isEmptyList = list => getListTrueLength(list) === 0

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const ExpandMore = styled(props => {
    const {expand, ...other} = props
    return <IconButton {...other} />
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}))

export default function DishItem({
    dishId,
    dishName,
    dishPhotoList,
    dishPrice,
    dishDescription,
    dishIngredients
}) {
    const [expanded, setExpanded] = useState(false)
    let hasPhoto = !isEmptyList(dishPhotoList)
    let hasMultiplePhoto = hasPhoto && getListTrueLength(dishPhotoList) > 1

    const handleExpandClick = () => {
        setExpanded(prevState => !prevState)
    }

    return (
        <Card key={dishId} className={cls.cardWrapper}>
            <Swiper
                grabCursor
                pagination={{clickable: true}}
                navigation={hasMultiplePhoto}
                loop={hasMultiplePhoto}
                className={cls.swiperContainer}>
                {hasPhoto ? (
                    dishPhotoList.map((image, index) => {
                        let img = image.split('\\')[image.split('\\').length - 1]
                        return (
                            <SwiperSlide key={index}>
                                <CardMedia
                                    image={`${IMAGE_API_URL}/${img}`}
                                    component='img'
                                    height='194'
                                    alt='Картинка'
                                />
                            </SwiperSlide>
                        )
                    })
                ) : (
                    <SwiperSlide key={dishId}>
                        <CardMedia
                            image={require('../../static/no-image.jpg')}
                            component='img'
                            height='194'
                            alt='Картинка'
                        />
                    </SwiperSlide>
                )}
            </Swiper>

            <CardContent>
                <Typography gutterBottom variant='h5' component='div' color={SECONDARY_COLOR}>
                    {dishName}
                </Typography>
            </CardContent>

            <CardActions className={cls.priceContainer}>
                <Button className={cls.price} size='small'>
                    {numberWithCommas(dishPrice)}
                </Button>
                {dishIngredients && dishDescription && (
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
                        <ExpandMoreIcon className={cls.expandIcon} />
                    </ExpandMore>
                )}
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph color={SECONDARY_COLOR}>{dishDescription}</Typography>
                    <Typography paragraph>
                        <span className={cls.ingredientTitle}>Состав: </span>
                        {dishIngredients?.map((ingredient, idx) => (
                            <span key={idx} className={cls.ingredient}>
                                {ingredient}
                                {idx === dishIngredients.length - 1 ? '' : ', '}
                            </span>
                        ))}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
