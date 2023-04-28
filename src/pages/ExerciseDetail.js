import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions,youtubeOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'



const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()
  
  
  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      // detail call
      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData)
      // videos call
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} Exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)
      // similar exercies call
      const similarExercisesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
       setTargetMuscleExercises(similarExercisesData);
      // similar equipment call
      const equipmentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
       setEquipmentExercises(equipmentExercisesData);
      }
    fetchExerciseDetail();
  }, [id]);
  return (
    
    <Box>
      <Detail
      exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail
