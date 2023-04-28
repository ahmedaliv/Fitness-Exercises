import React, { useEffect,useState} from 'react'
import { Pagination } from '@mui/material'
import {Box ,Stack,Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisesdb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisesdb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)        
      }
      setExercises(exercisesData);
    }
    fetchExercisesData(); 
  },[bodyPart]);
// pagination
const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
const currentExercises= exercises.slice(indexOfFirstExercise, indexOfLastExercise);

const paginate = (e,v) => {
  setCurrentPage(v)
  window.scrollTo({top:1800,behavior:'smooth'})
}
  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: '110px' }

      }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant='h3'
        mb='46px'
        textAlign='center'
        sx={{
          fontSize: {
            lg: '40px',
            xs: '30px'
          },
        }}
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: {
            lg:'110px',xs:'50px'
          },
          flexWrap: 'wrap',
        }}
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exercise={exercise}
          /> 
      ))}

      </Stack>
      <Stack mt="100px"
        alignItems='center'
      >
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
