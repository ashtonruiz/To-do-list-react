import React from 'react';

export default function ItemForm() {
  return (
    <div className='item-form'>
      <label>To do:</label>
      <input className='task'/>
      <button>Add</button>
    </div>
  );
}

// need to continue building out item form with some class names... also
// might need to just wrap the whole thing in a form? That is what I did with
// the signin/up situation. Also need to set State and createListItem stuff
