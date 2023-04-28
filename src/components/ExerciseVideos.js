import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
const ExerciseVideos = ({ exerciseVideos, name }) => {
  /* if (!exerciseVideos.length) {
    return 'Loading...'
  } */

  return (
    <Box
      sx={{
        marginTop: {
          lg: '200px', xs:'20px'
      }
      }}
      p='20px'
    >
      <Typography
        variant="h4"
      >
        Watch <span style={{color:'#ff2625' , textTranform:'capitalize'}}>{name}</span> Exercise Videos
      </Typography>
      <Stack 
        sx={{
          marginTop:'40px',
          flexDirection: {
            lg: 'row'
          },
          gap: {
            lg:'110px', xs:'0px'
          },
          flexWrap:'wrap',
        }}
        justifyContent='flex-start'
        alignItems='center'
      >
        {exerciseVideos.length ? exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer '
            style={{
              textDecoration: 'none',
            }}
          >
            <img src={item.video.thumbnails[0].url}
              alt={item.video.title} style={{
                borderRadius: '8px',
              }}
              className='exercise-video'
            />
            <Typography
              m='10px 0'
              fontWeight='600'
              vairant="h5"
              color='#000'
            >
              {item.video.title}
            </Typography>
            <Typography
              m='10px 0'
              vairant="h6"
              color='#1199'
            >
              {item.video.channelName}
            </Typography>
          </a>
        )) : <Loader />}
      </Stack>
    </Box>
    
  )
}

export default ExerciseVideos