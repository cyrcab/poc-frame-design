import { Box, Container, Typography } from '@mui/material'
import { DropZone } from './components/DropZone'
import { useState } from 'react'
import { MyFiles } from '../../entities/files'

interface ImagesDropProps {}

export const ImagesDrop: React.FC<ImagesDropProps> = () => {
  const [images, setImages] = useState<MyFiles[]>([])

  return (
    <Container>
      <Box sx={{ border: '1px solid grey', padding: 2 }} textAlign="center">
        <Typography variant="h5">Images list</Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid grey',
          padding: 1,
          display: 'flex',
          flexWrap: 'wrap',
          height: '40vh',
          overflow: 'auto',
        }}
      >
        {images.length ? (
          images.map((image) => (
            <Box key={image.id} sx={{ width: 100, height: 100, marginLeft: 1 }}>
              <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
            </Box>
          ))
        ) : (
          <></>
        )}
      </Box>
      <DropZone setImages={setImages} />
    </Container>
  )
}
