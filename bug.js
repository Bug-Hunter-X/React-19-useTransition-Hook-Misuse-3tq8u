```javascript
// This is a React 19 component that uses the new useTransition hook incorrectly.
import { useTransition, useState } from 'react';

function MyComponent() {
  const [isPending, setPending] = useState(false);
  const [text, setText] = useState('Initial Text');

  const [startTransition, isTransitioning] = useTransition();

  const handleClick = () => {
    setPending(true); //Setting this to true doesn't start the transition.
    startTransition(() => {
      setText('Updated Text');
      setPending(false); //Set this to false after transition completes
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