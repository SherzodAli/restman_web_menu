import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'
import cls from './GroupItem.module.sass'

export default function GroupItem({dishId, dishName, onClick}) {
    return (
        <Card key={dishId} className={cls.groupItemWrapper}>
            <Link to={`/dish/${dishId}`} className={cls.link} onClick={() => onClick()}>
                <CardContent>
                    <Typography variant='p' component='div'>
                        [{dishName}]
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}
