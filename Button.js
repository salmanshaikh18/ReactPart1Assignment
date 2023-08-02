/**
 * Create a component named 'Button' that takes two props -> 'text' and 'onClick'. The component shuld display a button element with the given text and call the onClick function when clicked.
 */

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button