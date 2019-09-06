import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "../../../../static/css/slider.css";
import "../../../../static/css/slider-styles.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  body: {
    margin: theme.spacing(2)
  },
  img: {
    width: 250,
    height: 500,
    marginTop: "10vh"
  },
  text: {
    color: "white"
  }
}));

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    phoneUrl: "/static/images/iphone-profile.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    phoneUrl: "/static/images/settings.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    phoneUrl: "/static/images/home.png"
  }
];

function SliderComponent() {
  const classes = useStyles();
  return (
    <Slider autoplay={5000} infinite={true} className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <Container component="main" maxWidth="md">
            <div className={classes.root} container spacing={2}>
              <div className={classes.body}>
                <img src={item.phoneUrl} className={classes.img} />
              </div>
              <div className={classes.body}>
                <Typography variant="h4" className={classes.text}>{item.title}</Typography>
                <Typography variant="body1" className={classes.text}>{item.description}</Typography>
                <Button variant="contained">{item.button}</Button>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;