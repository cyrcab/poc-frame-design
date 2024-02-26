import { Box, Container, Typography } from '@mui/material'
import { DropZone } from './components/DropZone'
import { Dispatch, SetStateAction } from 'react'
import { MyFiles } from '../../entities/files'

interface ImagesDropProps {
  images: MyFiles[]
  setImages: Dispatch<SetStateAction<MyFiles[]>>
}

export const ImagesDrop: React.FC<ImagesDropProps> = ({ images, setImages }) => {
  return (
    <Container
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ border: '1px solid grey', padding: 2 }} textAlign="center">
        <Typography variant="h5">Images list</Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid grey',
          padding: 1,
          display: 'flex',
          height: '100%',
          flexWrap: 'wrap',
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
