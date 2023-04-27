import React , {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu ,VisibilityContext} from 'react-horizontal-scrolling-menu'
const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.name || item}
          m="0 40px"
        >
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> 
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar
