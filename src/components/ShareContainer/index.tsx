import { Container, Box, Typography } from '@mui/material'

interface ShareContainerProps {}

export const ShareContainer: React.FC<ShareContainerProps> = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h3">Share your frame</Typography>
      </Box>
    </Container>
  )
}
