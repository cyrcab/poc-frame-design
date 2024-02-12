import { Container, Box, Typography } from "@mui/material"

interface FrameDesignerProps {}

export const FrameDesigner: React.FC<FrameDesignerProps> = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h3">Frame Designer</Typography>
      </Box>
    </Container>
  )
}
