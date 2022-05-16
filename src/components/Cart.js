import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app, db } from "../firebase/firebase.js";
import { doc, getDoc, updateDoc, arrayRemove, deleteField } from "@firebase/firestore";
import { Box, Grid, Card, CardActions, CardMedia, CircularProgress, CardContent, Typography, Button } from "@mui/material";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const auth = getAuth(app);

    const fetchData = useCallback(async () => {
        setLoading(true);
        const docRef = doc(db, "cart", "orders");
        const snapshot = await getDoc(docRef);
        const data = snapshot.data();
        console.log(data);
        let totalPrice = 0;
        if (data) {
            Object.keys(data).forEach((key) => {
                data[key].forEach((item) => {
                    totalPrice += item.price;
                });
            });
        }
        setTotal(totalPrice);

        setCart(data[user.uid] || []);
        setLoading(false);
    }, [user]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate("/login")
        } else {
            setUser(user);
        }
    });

    const onCheckout = async () => {
        const cartRef = doc(db, "cart", "orders");
        await updateDoc(cartRef, {
            [user.uid]: deleteField()
        });
        navigate("/confirmation");
    };

    const removeFromCart = async (item) => {
        const cartRef = doc(db, "cart", "orders");
        await updateDoc(cartRef, {
            [user.uid]: arrayRemove({
                item_id: item.item_id,
                name: item.name,
                price: item.price,
                image: item.image,
            })
        });
        window.location.reload();
    }
    return (
        <Fragment>
            <Box>
                {loading ? (
                    <CircularProgress />
                ) : (
                    cart.length > 0 ? (
                        <Fragment>
                            <Grid container spacing={3} padding={10} >
                                {cart.map((item) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="100%"
                                                image={item.image}
                                                alt={item.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {item.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={() => removeFromCart(item)} size="small" color="primary">
                                                    Remove from Cart
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography sx={{ background: "#721702", width: "50%", borderRadius: "5px" }} color="white" variant="h5" component="h2">
                                            Total: {total} Runes
                                        </Typography>
                                        <Button onClick={onCheckout} sx={{ width: "50%" }} variant="contained" color="primary">
                                            Checkout
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Fragment>
                    ) : (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ background: "#721702", mt: 3, width: "50%", borderRadius: "15px" }} color="white" variant="h5" component="h2">
                                Your cart is empty
                            </Typography>
                        </Box>
                    )
                )
                }
            </Box >
        </Fragment >

    )
}
