import { DirectoryContainer } from './directory.styles.jsx'
import DirectoryItem from '../directory-item/directory-item.component'

export default function Directory({ categories }) {

    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem category={category} key={category.id} />

            ))}
        </DirectoryContainer>
    )
}