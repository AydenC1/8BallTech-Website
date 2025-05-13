import React from 'react';

function Test() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: 'navy', fontSize: '32px' }}>Simple Test Component</h1>
      <p style={{ fontSize: '18px' }}>If you can see this styled content, React is working correctly.</p>
      <button 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: 'blue', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Button clicked!')}
      >
        Click Me
      </button>
    </div>
  );
}

export default Test;