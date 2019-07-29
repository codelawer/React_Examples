import React from 'react';

function Joke(props) {
  return (
    <div>
      <h2
        style={{
          display: props.jokes.question ? 'block' : 'none' /* !props.jokes.question && "none"*/,
        }}
      >
        Question = {props.jokes.question}
      </h2>
      <br />
      <h3>Result = {props.jokes.answer}</h3>
      <hr />
    </div>
  );
}

export default Joke;
