import useImage from 'use-image'
import { MyFiles } from '../../../entities/files'
import { Image } from 'react-konva'

interface DraggableImageProps {
  img: MyFiles
}

export const DraggableImage: React.FC<DraggableImageProps> = ({ img }) => {
  const [image] = useImage(img.src)
  return <Image image={image} draggable/>
}
