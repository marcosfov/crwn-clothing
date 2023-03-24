import { useNavigate } from "react-router-dom"
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx"

export default function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}