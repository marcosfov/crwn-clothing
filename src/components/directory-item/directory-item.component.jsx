import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx"

export default function DirectoryItem({ category }) {
  const { title, imageUrl } = category

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}