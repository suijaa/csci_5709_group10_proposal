import React from 'react';
import Header from '../Header';
import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";

function Success() {
  return (
    <div>
      <Header />
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "10px 10px" }}>
        <CardContent>
          <Grid style={{ alignContent: "center" }}>
            <Typography variant="h5" gutterBottom align="center">
              Thank you for your order.
            </Typography>
          </Grid>
          <Grid container padding={"20px 10px"}>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </div>

  )
}

export default Success
