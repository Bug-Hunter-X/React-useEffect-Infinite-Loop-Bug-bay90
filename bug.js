```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This effect runs on every render
    // and potentially causes an infinite loop if count is updated within the effect.
    console.log('Effect running!');
    setCount(count + 1);
  }, []); // Empty dependency array causes the effect to run only once (on mount)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```