import React,{useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    const location = useLocation();
    const [exercisesId, setExercisesId] = useState('#exercises')
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        const currentPage= window.location.pathname;
        currentPage.includes('exercise') ? setExercisesId("#video-exercises") : setExercisesId("#exercises");
      }, [location.pathname])    
  return (
      <Stack
          direction="row"
          justifyContent="space-around"
          sx={{
              gap: {
                  sm: '122px',
                  xs: '40px'
              },
              mt: {
                  sm: '32px',
                  xs:'20px'
              },
              justifyContent: 'none'
          }}
          px='20px'
      >
              <Link to="/">
              <img src={Logo} alt="Logo" style={{
                  width: '48px',
                  height: '48px',
                    margin: '0 20px',
                  }}/>
          </Link>
          <Stack
              direction="row"
              gap="40px"
              fontSize="24px"
              alignItems="flex-end"
          >
              <Link to="/"
                  style={{
                      textDecoration: 'none',
                      color: '#3A1212',
                      borderBottom: '3px solid #FF2625',
                      scrollBehavior: 'smooth'
              }}
              >Home</Link>
              
              <a href={exercisesId} style={{
                  textDecoration: 'none',
                  color: '#3A1212',
              }}
              >Excercise</a>
          </Stack>
      </Stack>
  )
}

export default Navbar
