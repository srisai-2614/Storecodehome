import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css';

export default function Cards(props) {
    let Head=props.Head
    let Description=props.Description
    console.log(Head,Description)
    let Step=props.Image
  return (
    <Card sx={{ minWidth: 345 }} className='CardComponent'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Step}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='CardHead' style={{fontFamily:"Monoton",fontWeight:"bolder"}}>
                {Head}
          </Typography>
          <Typography variant="body2"  className='CardDescription' style={{fontFamily:"Monoton"}}>
                {Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}