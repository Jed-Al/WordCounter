import { useEffect, useState } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import './App.css';

export default function App() {

  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [countChar, setCountChar] = useState(0);


  const counter = () => {
    const listOfStrings = query.split(" ")
    let wordCount = 0;
    let charCount = query.replaceAll(" ", "").length;
    listOfStrings.forEach(strings => {
      if (strings.length > 1) {
        wordCount = wordCount + 1
      }
    })
    setCount(wordCount);
    setCountChar(charCount);
  }
  useEffect(() => { counter(); }, [query])

  return (
    <div className="base">
      <FormGroup>
        <Input
          className = "input-field"
          name="text"
          type="textarea"
          placeholder="Enter your paragraph here"
          onChange={e => setQuery(e.target.value)
          }
          value={query}
        />
      </FormGroup>
      <span>Words : {count}</span>
      <span>Letters : {countChar}</span>
    </div>
  );
}


