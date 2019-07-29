// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
// App should be in its own file
// App should render 5 <Joke /> components
// Each Joke should receive a "question" prop and a "punchLine" prop
// and render those however you'd like

// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
// E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?
// Spend time practicing the style of your Joke component

import React from 'react';
import Joke from './components/Joke';

function App() {
  return (
    <div>
      <Joke
        jokes={{
          answer: 'When someone leaves, it’s because someone else is about to arrive.',
        }}
      />

      <Joke
        jokes={{
          question: 'Say something about money?',
          answer:
            'Money is not everything but make sure you earn enough before thinking such nonsense.',
        }}
      />
      <Joke
        jokes={{
          question: 'When are you right?',
          answer: "Whether you think you can or you think you can't, you're right.",
        }}
      />
      <Joke
        jokes={{
          question: 'What do you think about dream?',
          answer:
            "Dream is not the thing you see in sleep but is that thing that doesn't let you sleep.",
        }}
      />
      <Joke
        jokes={{
          question: 'What will you be regret in the future most?',
          answer:
            'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
        }}
      />
    </div>
  );
}

export default App;
