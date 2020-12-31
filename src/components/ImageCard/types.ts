export type ImageType = {
  url: string, 
  description?: string, 

}

export interface ImageProps extends ImageType {
  onClick: (image: ImageType) => void,
  onRemove: (index: number) => void,
  index: number
}
