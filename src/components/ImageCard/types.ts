export type ImageType = {
  url: string, 
  description?: string, 
}
export interface ImageProps extends ImageType {
  onClick: () => void,
}
