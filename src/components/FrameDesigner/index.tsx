import { Container, Box, Typography } from '@mui/material'
import { Stage, Layer } from 'react-konva'
import { MyFiles } from '../../entities/files'
import { DraggableImage } from '../ImagesDrop/components/DraggableImage'

interface FrameDesignerProps {
  images: MyFiles[]
}

export const FrameDesigner: React.FC<FrameDesignerProps> = ({ images }) => {
  const handleDragOver = (event) => event.preventDefault()

  const handleDrop = (event) => {
    event.preventDefault()
    const data = event.dataTransfer.getData('image/url')
    console.log(data)
  }
  return (
    <Container
      style={{
        border: '1px solid black',
        height: '100%',
      }}
    >
      <Box textAlign="center">
        <Typography variant="h3">Frame Designer</Typography>
      </Box>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Layer>
          {images.map((img, index) => (
            <DraggableImage key={index} img={img} />
          ))}
        </Layer>
      </Stage>
    </Container>
  )
}
