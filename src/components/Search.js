import React from 'react';

function Search(props) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control "
        placeholder="Type to Search..."
        value={props.value}
        onChange={props.inputChangeHandler}
        type="text"
      />
    </div>
  );
}

export default Search;
