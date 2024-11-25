export const blogStyle = `<style>
  /* Article Styles */
  article {
    background-color: #fffbf0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  article:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  article h1 {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    font-size: 2em;
    margin-bottom: 0.5em;
    color: #d9534f;
  }

  article h2 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #777;
    font-size: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }


  article p {
    margin-bottom: 1em;
    line-height: 1.8;
  }

  article a {
    color: #d9534f;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  article a:hover {
    color: #c9302c;
    text-decoration: underline;
  }

  article img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1em;
  }

  /* Code Block Styles */
  article pre {
    background-color: #333;
    color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }

  article code {
    background-color: #e3e3e3;
    color: #c7254e;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: "Courier New", Courier, monospace;
  }

  /* Quote Styles */
  article blockquote {
    background-color: #e9ecef;
    border-left: 5px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  article blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  article blockquote p {
    display: inline;
  }
</style>`;

export function transitionTexts(text1, text2, totalSteps, callback) {
  const maxLength = Math.max(text1.length, text2.length);
  const paddedText1 = text1.padEnd(maxLength, " ");
  const paddedText2 = text2.padEnd(maxLength, " ");

  let currentMask = paddedText1.split("");
  const finalMask = paddedText2.split("");

  function randomAsciiChar() {
    const asciiStart = 33; // Printable ASCII starts at '!'
    const asciiEnd = 126; // Printable ASCII ends at '~'
    return String.fromCharCode(
      Math.floor(Math.random() * (asciiEnd - asciiStart + 1)) + asciiStart
    );
  }

  let stepCount = 0;
  const interval = setInterval(() => {
    const progress = stepCount / totalSteps; // Progress ratio (0 to 1)

    // Gradually reduce randomness and increase correctness
    const randomChance = Math.max(0.2, 1 - progress); // Starts high, decreases with progress
    const correctInsertionChance = Math.min(0.8, progress); // Starts low, increases with progress

    for (let i = 0; i < currentMask.length; i++) {
      if (currentMask[i] !== finalMask[i]) {
        if (Math.random() < randomChance) {
          currentMask[i] = randomAsciiChar(); // Random character
        } else if (Math.random() < correctInsertionChance) {
          currentMask[i] = finalMask[i]; // Correct character
        }
      }
    }

    stepCount++;
    callback(currentMask.join(""));

    // End when we match the target or steps are exhausted
    if (
      currentMask.join("") === finalMask.join("") ||
      stepCount >= totalSteps
    ) {
      clearInterval(interval);

      callback(finalMask.join("")); // Ensure the final state
    }
  }, 100); // Adjust for smoother/faster transitions
}

//Updated transitionTexts with Green Variations
function transitionTextsColor(text1, text2, totalSteps, callback) {
  const maxLength = Math.max(text1.length, text2.length);
  const paddedText1 = text1.padEnd(maxLength, " ");
  const paddedText2 = text2.padEnd(maxLength, " ");

  let currentMask = paddedText1.split("");
  const finalMask = paddedText2.split("");

  // Function to generate a random variation of green
  function getRandomGreenColor() {
    const red = 0; // Keep red low
    const blue = 0; // Keep blue low
    const green = Math.floor(Math.random() * 256); // Random green value (0 to 255)
    return `rgb(${red}, ${green}, ${blue})`; // RGB with varying green
  }

  function randomAsciiChar() {
    const asciiStart = 33; // Printable ASCII starts at '!'
    const asciiEnd = 126; // Printable ASCII ends at '~'
    return String.fromCharCode(
      Math.floor(Math.random() * (asciiEnd - asciiStart + 1)) + asciiStart
    );
  }

  let stepCount = 0;
  const interval = setInterval(() => {
    const progress = stepCount / totalSteps; // Progress ratio (0 to 1)

    // Gradually reduce randomness and increase correctness
    const randomChance = Math.max(0.2, 1 - progress); // Starts high, decreases with progress
    const correctInsertionChance = Math.min(0.8, progress); // Starts low, increases with progress

    for (let i = 0; i < currentMask.length; i++) {
      if (currentMask[i] !== finalMask[i]) {
        if (Math.random() < randomChance) {
          currentMask[i] = randomAsciiChar(); // Random character
        } else if (Math.random() < correctInsertionChance) {
          currentMask[i] = finalMask[i]; // Correct character
        }
      }
    }

    // Apply a random green color and small opacity to the characters
    const styledText = currentMask
      .map((char, idx) => {
        const isCorrect = char === finalMask[idx];

        // Slight opacity for incorrect characters, full opacity for correct ones
        const randomOpacity = isCorrect ? 1 : Math.random() * 0.5 + 0.3; // Opacity between 0.3 and 1
        const randomGreenColor = getRandomGreenColor(); // Random shade of green
        const opacityStyle = `opacity: ${randomOpacity}; color: ${randomGreenColor};`;

        return `<span style="${opacityStyle}">${char}</span>`;
      })
      .join("");

    callback(styledText); // Pass the styled text to the callback

    stepCount++;
    // End when we match the target or steps are exhausted
    if (
      currentMask.join("") === finalMask.join("") ||
      stepCount >= totalSteps
    ) {
      clearInterval(interval);

      // Final state with full opacity and no color change
      const finalStyledText = finalMask
        .map((char) => `<span>${char}</span>`)
        .join("");
      callback(finalStyledText); // Final state without opacity change
    }
  }, 100); // Adjust for smoother/faster transitions
}