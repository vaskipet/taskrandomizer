import React from 'react';

const Action = (props) => (
  <div>
    <button 
    className="button button__big"
    onClick={props.handlePick}
    disabled = {!props.hasOptions}
    >
    Show me my next task!
    </button>
  </div>
)

export default Action;