import React from 'react';
import Child from './components/child'

const Parents = () => {
    return (
        
        <div className="App">
          <header className="App-header">
            <h2> I'm the parent component</h2>
            <Child number="first" />
            <Child number="second"/>
            <Child number="third"/>
            
          </header>
        </div>
        
    )
}

export default Parents
