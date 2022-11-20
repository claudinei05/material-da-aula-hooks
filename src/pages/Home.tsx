import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonDefault from '../components/ButtonDefault/ButtonDefault';

const Home: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Home</Typography>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus cumque? Ipsam modi inventore
            nam accusantium dolore tempore deleniti temporibus, numquam quia dolor, amet voluptate iste, eveniet esse
            culpa repudiandae.
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Typography variant="body1" color={'secondary'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus cumque? Ipsam modi inventore
          nam accusantium dolore tempore deleniti temporibus, numquam quia dolor, amet voluptate iste, eveniet esse
          culpa repudiandae.
        </Typography>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Button variant="contained" onClick={handleClick}>
          Sobre
        </Button>
        <ButtonDefault label="Sobre" />
      </Grid>
    </Grid>
  );
};

export default Home;
