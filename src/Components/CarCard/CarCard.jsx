import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CarCard({ vehicle }) {
  const { brand, model, year, images, color, price } = vehicle;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height="140"
          image={images[0].urlPath} 
          alt={`${brand.name} ${model}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brand.name} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Model: {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color: {color.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price.retailPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CarCard;