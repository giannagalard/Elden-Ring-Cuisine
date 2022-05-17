import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app, db } from "../firebase/firebase.js";
import { doc, getDoc, updateDoc, arrayUnion } from "@firebase/firestore";
import { Box, Grid, CircularProgress } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Order() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onClick = (item) => {
    addToCart(item);
    handleClick()
  }



  const fetchData = async () => {
    setLoading(true);
    const docRef = doc(db, "menu", "menu-items");
    const snapshot = await getDoc(docRef);
    const data = snapshot.data();
    setMenu(data.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login")
    } else {
      setUser(user);
    }
  });

  const addToCart = async (item) => {
    const cartRef = doc(db, "cart", "orders");
    await updateDoc(cartRef, {
      [user.uid]: arrayUnion({
        item_id: item.id,
        name: item.name,
        price: item.price,
        image: item['item-image'],
      })
    });
  }


  return (
    <Fragment>
      <Box>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3} padding={10} >
            {menu.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                <Card>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={item['item-image']}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                      {item.price} Runes
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => onClick(item)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      rel="noreferrer noopener"
                      target="_blank" component="a"
                      href={item.info}
                      size="small"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Added to Cart Successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Fragment >
  );
}
