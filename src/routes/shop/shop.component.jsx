import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import './shop.styles.scss'

export default function Shop() {

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </>
  )
}