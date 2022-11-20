import React from 'react';
import { Grid, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Sobre</Typography>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus cumque? Ipsam modi inventore
          nam accusantium dolore tempore deleniti temporibus, numquam quia dolor, amet voluptate iste, eveniet esse
          culpa repudiandae.
        </Typography>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus cumque? Ipsam modi inventore
          nam accusantium dolore tempore deleniti temporibus, numquam quia dolor, amet voluptate iste, eveniet esse
          culpa repudiandae.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
