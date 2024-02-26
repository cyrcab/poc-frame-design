export interface MyFiles extends File {
  id: number
  src: string
  alt: string
  isDragging?: boolean
  x?: number
  y?: number
  rotation?: number
}
