// 1. Create a component named 'Person' that takes two props - 'name' and 'age'. The component should display the person's name and age in a paragraph element

const Person = ({name, age}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Person