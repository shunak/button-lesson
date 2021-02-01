import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
      >
        Hello UIHello UIHello UIHello UIHello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="flex-end"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            Test
          </Grid>
        </Grid>
        <Grid item xs={12} justify="space-around" container>
          <Grid item xs={3}>
            Routes All HTTP methods are supported. You can use http or https for
            your requests. GET /posts GET /posts/1 GET /posts/1/comments GET
            /comments?postId=1 POST /posts PUT /posts/1 PATCH /posts/1 DELETE
            /posts/1 Note: see guide for usage examples.
          </Grid>
          <Grid item xs={3}>
            Routes All HTTP methods are supported. You can use http or https for
            your requests. GET /posts GET /posts/1 GET /posts/1/comments GET
            /comments?postId=1 POST /posts PUT /posts/1 PATCH /posts/1 DELETE
            /posts/1 Note: see guide for usage examples.
          </Grid>
          <Grid item xs={3}>
            Routes All HTTP methods are supported. You can use http or https for
            your requests. GET /posts GET /posts/1 GET /posts/1/comments GET
            /comments?postId=1 POST /posts PUT /posts/1 PATCH /posts/1 DELETE
            /posts/1 Note: see guide for usage examples.
          </Grid>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
