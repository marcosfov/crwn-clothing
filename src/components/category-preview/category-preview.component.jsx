import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import { Preview, CategoryPreviewContainer, CategoryPreviewTitle } from './category-preview.styles.jsx'

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer className='card-produto'>
      <h2>
        <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
      </h2>

      <Preview>
        {
          products.filter((_, idx) => idx < 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>

  )
}
