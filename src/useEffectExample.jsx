import {useEffect, useState} from "react";


export function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    }

  }, [])

  return (
    <p>{counter} seconds have passed</p>
  )
}

/* useEffect(
  () => {
    // execute side effect
    return () => {
      // cleanup function on unmounting or re-running effect
    }
  },
  // optional dependency array
  [0 or more entries ]
) */