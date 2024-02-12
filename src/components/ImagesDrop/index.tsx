import { Box, Button, Container, Typography } from '@mui/material'
import { listOfImages } from './constant'
import HighlightAltIcon from '@mui/icons-material/HighlightAlt'

interface ImagesDropProps {}

export const ImagesDrop: React.FC<ImagesDropProps> = () => {
  return (
    <Container>
      <Box sx={{ border: '1px solid grey', padding: 2 }} textAlign="center">
        <Typography variant="h5">Images list</Typography>
      </Box>
      <Box sx={{ border: '1px solid grey', padding: 2, display: 'flex', flexWrap: 'wrap' }}>
        {listOfImages.map((image) => (
          <Box key={image.id} sx={{ padding: 1 }}>
            <img src={image.src} alt={image.alt} />
          </Box>
        ))}
      </Box>
      <Box sx={{ border: '1px solid grey', padding: 2 }} textAlign="center">
        <Box
          sx={{
            border: '1px dashed grey',
            padding: 5,
          }}
        >
          <Typography variant="h5">Drag and drop</Typography>
          <HighlightAltIcon sx={{ fontSize: 100 }} />
          <Typography variant="h5">Drop your images here</Typography>
        </Box>
        <Box mt={2} width="100%">
          <Button
            variant="outlined"
            color="info"
            sx={{
              width: '100%',
            }}
          >
            Upload
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
