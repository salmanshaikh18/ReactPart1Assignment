/**
 * 3. Create component named 'Header' that takes one prop- 'title'. The component should display a header element with the given title.
 */

const Header = ({title}) => {
    return (
        <header>
            <h1>{ title }</h1>
        </header>
    )
}

export default Header