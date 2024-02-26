import { Box, Container, Grid, Typography } from '@mui/material'
import { ImagesDrop } from './components/ImagesDrop'
import { FrameDesigner } from './components/FrameDesigner'
import { ShareContainer } from './components/ShareContainer'
import { useState } from 'react'
import { MyFiles } from './entities/files'

function App() {
  const [images, setImages] = useState<MyFiles[]>([])

  return (
    <Grid container justifyContent="center" height="100vh">
      <Grid item xs={12} height="10%">
        <Container>
          <Box textAlign="center">
            <Typography variant="h2">Design your frame</Typography>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={3} height="80%">
        <ImagesDrop images={images} setImages={setImages} />
      </Grid>
      <Grid item xs={7} height="80%">
        <FrameDesigner images={images} />
      </Grid>
      <Grid item xs={2} height="80%">
        <ShareContainer />
      </Grid>
    </Grid>
  )
}

export default App
