import logo from './logo.svg';
import Person from './Person'
import Button from './Button'
import Header from './Header'
import List from './List'

function App() {
  const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <div className="App">
      <h2>Developer Salman :)</h2>

      <h3>Question 1: Create a component named 'Person' that takes two props - 'name' and 'age'. The component should display the person's name and age in a paragraph element</h3>
      <Person name="Salman" age={20} />
      <Person name="Virat" age={35} />

      <h3>Question 2: Create a component named 'Button' that takes two props -> 'text' and 'onClick'. The component shuld display a button element with the given text and call the onClick function when clicked.</h3>
      <Button text="Click me!" onClick={() => {
        alert('Button Clicked :)')
      }} />

      <h3>Question 3: Create component named 'Header' that takes one prop- 'title'. The component should display a header element with the given title.</h3>
      <Header title="Developer Salman" />
      <p>This is the content of the app</p>

      <h3>Question 4: Create a componenet named 'List' that takes one prop - 'items'. The componenet should display an unordered list element with the given list items</h3>
      <h1>List Componenet Example</h1>
      <List items={listItems} />
    </div>
  );
}

export default App;
