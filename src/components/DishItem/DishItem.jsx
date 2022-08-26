import * as React from 'react'
import {useState} from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './DishItem.sass'
import {Swiper, SwiperSlide} from 'swiper/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import {styled} from '@mui/material/styles'

import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper/core'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {IMAGE_API_URL} from '../../App'

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
        <Card key={dishId} sx={{minWidth: '80%', maxWidth: '80%', backgroundColor: 'hsl(348, 100%, 61%)'}} style={{marginBottom: 30}}>
            <Swiper
                grabCursor
                pagination={{clickable: true}}
                navigation={hasMultiplePhoto}
                loop={hasMultiplePhoto}
                className='swiperContainer'>
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
                                    // style={{objectFit: 'contain', backgroundColor: '#ECECEC'}}
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
                <Typography gutterBottom variant='h5' component='div' color={'hsl(48, 100%, 67%)'}>
                    {dishName}
                </Typography>
            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button style={{fontWeight: 'bold', fontSize: 36, color: 'hsl(48, 100%, 67%)'}} size='small'>
                    {numberWithCommas(dishPrice)}
                </Button>
                {dishIngredients && dishDescription && (
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
                        <ExpandMoreIcon style={{color: 'hsl(48, 100%, 67%)', fontSize: 38}} />
                    </ExpandMore>
                )}
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph color={'hsl(48, 100%, 67%)'}>{dishDescription}</Typography>
                    <Typography paragraph>
                        <span style={{color: 'hsl(48, 100%, 67%)', fontWeight: 'bold'}}>Состав: </span>
                        {dishIngredients?.map((ingredient, idx) => (
                            <span key={idx} className={'ingredient-simple'}>
                                {ingredient}
                                {dishIngredients.length - 1 === idx ? '' : ', '}
                            </span>
                        ))}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
