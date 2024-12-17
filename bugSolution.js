```javascript
// Correct usage of the useTransition hook in React 19
import { useTransition, useState } from 'react';

function MyComponent() {
  const [isPending, setPending] = useState(false);
  const [text, setText] = useState('Initial Text');

  const [startTransition, isTransitioning] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setPending(true);
      setText('Updated Text');
      setPending(false);
    });
  };

  return (
    <div>
      <p>Is Transitioning: {isTransitioning.toString()}</p>
      <p>Is Pending: {isPending.toString()}</p>
      <p>{text}</p>
      <button onClick={handleClick}>Update Text</button>
    </div>
  );
}
export default MyComponent;
```