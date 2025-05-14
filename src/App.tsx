import { useState } from 'react';
import Button from './ui/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button
      label={`Current count: ${count}`}
      onClick={() => setCount(count + 1)}
    />
  );
}

export default App;
