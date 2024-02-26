import { Box, Typography } from '@mui/material'
import HighlightAltIcon from '@mui/icons-material/HighlightAlt'
import { useDropzone } from 'react-dropzone'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { MyFiles } from '../../../entities/files'

interface DropZoneProps {
  setImages: Dispatch<SetStateAction<MyFiles[]>>
}

export const DropZone: React.FC<DropZoneProps> = ({ setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Traiter les fichiers ici
      setImages((prev) => [
        ...prev,
        {
          id: Math.random(),
          src: URL.createObjectURL(acceptedFiles[0]),
          alt: 'placeholder 1',
          ...acceptedFiles[0],
        },
      ])
    },
    [setImages]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box
      sx={{ border: '1px solid grey', padding: 2, cursor: 'pointer' }}
      {...getRootProps()}
      textAlign="center"
    >
      <Box
        sx={{
          border: '1px dashed grey',
          padding: 1,
          borderRadius: 5,
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography variant="h5">Drop your images here</Typography>
        ) : (
          <Typography variant="h5">
            Glissez-déposez des fichiers ici, ou cliquez pour sélectionner des fichiers
          </Typography>
        )}
        <HighlightAltIcon sx={{ fontSize: 100 }} />
      </Box>
    </Box>
  )
}
