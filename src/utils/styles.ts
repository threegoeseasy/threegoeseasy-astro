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

    font-size: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #777;
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
