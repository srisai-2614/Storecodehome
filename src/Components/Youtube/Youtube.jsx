import React from 'react';
import {  Paper } from '@mui/material'; // Assuming you're using Material-UI

const YtVideos = () => {
  const influencerVideos = [
    {
      name: 'Influencer 1',
      videoUrl: 'https://www.youtube.com/embed/Vs_hBYbTy_M',
    },
    {
      name: 'Influencer 2',
      videoUrl: 'https://www.youtube.com/embed/A0KPwb_4Rco',
    },
    {
        name: 'Influencer 3',
        videoUrl: 'https://www.youtube.com/embed/dkH96OJ9BuI',
      },
    // Add more influencers and their video URLs as needed
  ];

  return (
    <div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px',justifyContent:'center',alignItems:'center',paddingTop:'5%'}}>
        {influencerVideos.map((influencer, index) => (
          <Paper key={index} elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <iframe
              width="360"
              height="202"
              src={influencer.videoUrl}
              title={influencer.name}
              frameBorder="0"
              allowFullScreen
            />

          </Paper>
        ))}
      </div>
    </div>
  );
};

export default YtVideos;
