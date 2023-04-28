import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import EquipmentImage from '../assets/icons/equipment.png'
import TargetImage from '../assets/icons/target.png'



const Detail = ({ exerciseDetail }) => {
    const { name, bodyPart, equipment, target, gifUrl } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
        {
            icon: TargetImage,
            name: target,
        }
    ]
    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: {
                     lg:'row'
                },
                p:'20px',
                alignItems:'center'
          }}
      >
            <img
                src={gifUrl} alt={name} loading='lazy' className='detail-image'
                style={{
                    marginTop:'20px'
                }}
            />
            <Stack 
                sx={{
                    gap: {
                        lg: '35px',
                        xs:'20px'
                }
                }}
            >
                <Typography
                    variant="h4"
                    textTransform='capitalize'
                >
                    {name}
                </Typography>
                <Typography
                variant="h6"
                >
                    Exercises keep you strong. {name} {` `} 
                    is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item,index) => (
                    <Stack key={index} direction="row"
                        gap="24px"
                        alignItems='center'>
                        <Button
                            sx={{
                                backroungColor:'#fff2db',
                                borderRadius:"50%",
                                width:'100px',
                                height:'100px'
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{
                                    width: '50px',
                                    height:'50px'
                                }}
                            />
                        </Button>
                        <Typography
                            variant="h5"
                            textTransform='capitalize'
                        >                    
                            {item.name}
                        </Typography>

                    </Stack>
                ))}
            </Stack>
   </Stack>
  )
}

export default Detail
