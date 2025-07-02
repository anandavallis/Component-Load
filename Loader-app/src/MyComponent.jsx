import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component Loaded');
  }, []);

  return (
    <div>
      <h1>MyComponent Loaded</h1>
    </div>
  );
}

export default MyComponent;
