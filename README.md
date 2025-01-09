# React UseEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrectly using the `useEffect` hook.

## Description

The `bug.js` file contains a `MyComponent` that uses `useEffect` to update the state. However, the effect's callback updates the state (`setCount`) without specifying any dependencies.  This causes the effect to run repeatedly, creating an infinite loop and potentially crashing the application. 

The solution demonstrates how to fix this by including the correct dependencies in the effect's dependency array.