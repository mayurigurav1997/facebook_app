import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Share, Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <Card sx={{ margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Rachel Green"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="1%"
          image="https://image.shutterstock.com/image-photo/flying-by-lake-260nw-111732092.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>

      </Card>
  )
}

export default Post