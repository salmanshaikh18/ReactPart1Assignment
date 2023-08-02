/**
 * Create a componenet named 'List' that takes one prop -> 'items'. The componenet should display an unordered list element with the given list items
 */

const List = ({ items }) => {
    return (
        <ul>
           {items.map((item) => (
            <li>{item}</li>
           ))} 
        </ul>
    )
}

export default List