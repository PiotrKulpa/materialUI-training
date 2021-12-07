import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import ShareIcon from "@mui/icons-material/Share";
import CardMedia from '@mui/material/CardMedia';

const CoffeCard = (props) => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  return (
    <Card sx={{ minHeight: 450 }}>
      <CardHeader
        title={title}
        subheader={subtitle}
        avatar={<Avatar src={avatarUrl} />}
        action={<ShareIcon />}
      />
       <CardMedia
        component="img"
        height="150px"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
