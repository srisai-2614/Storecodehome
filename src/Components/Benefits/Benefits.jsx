import React from 'react';
import { Grid, Typography, Paper } from '@mui/material'; // Assuming you're using Material-UI

const Benefits = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        <h4 style={{fontFamily:'Playfair Display'}}>Our Program</h4>
      </Typography>
      <Grid container spacing={2}>
        {/* Your Personal Store */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center',height:'30vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className='Pointone'>
            <Typography variant="h6" gutterBottom > 
              <h4 style={{fontWeight:'bolder',fontFamily:'Playfair Display'}}>
                Your Personal Store🛒
              </h4>
            </Typography>
            <Typography variant="body1">
              <p style={{fontFamily:'Playfair Display'}}>Gain your very own personal store on our platform, powered by your influence and recommendations. Showcase your favorite products and make it easy for your followers to access them.</p>
            </Typography>
          </Paper>
        </Grid>

        {/* Keep it a Secret */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center',height:'30vh',fontFamily:'Playfair Display',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Typography variant="h6" gutterBottom style={{fontWeight:'bolder'}}>
              <h4 style={{fontWeight:'bolder',fontFamily:'Playfair Display'}}>Keep it a Secret😉</h4>
            </Typography>
            <Typography variant="body1">
              <p style={{fontFamily:'Playfair Display'}}>We encourage you not to reveal the exact websites from which you purchase the products you promote in your new videos. Keeping it a secret under your unique code ensures your hard work is rewarded.</p>
            </Typography>
          </Paper>
        </Grid>

        {/* Exclusive Partnership Program */}
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center',height:'30vh',fontFamily:'Playfair Display',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Typography variant="h6" gutterBottom style={{fontWeight:'bolder'}}>
              <h4 style={{fontWeight:'bolder',fontFamily:'Playfair Display'}}>Exclusive Partnership Program🤝</h4>
            </Typography>
            <Typography variant="body1">
              <p style={{fontFamily:'Playfair Display'}}>Collaborate with major shopping brands and earn from every purchase made through your unique codes. Your influence becomes your earning potential.</p>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Benefits;
