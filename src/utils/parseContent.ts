function parseJSON(jsonString : string) {
    try {
      const data = JSON.parse(jsonString);
      const { title, description, image, link } = data;
  
      return { title, description, image, link };
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
  }