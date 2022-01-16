
const ImageList = ({images}) => {
  const imageItems = images.map(image => {
    return <img key={image.id} src={image.urls.regular} alt="" />
  })
  return(
    <div>{imageItems}</div>
  )
}

export default ImageList;