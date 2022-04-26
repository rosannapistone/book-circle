async function getAllBooks() {
    try {
      const response = await fetch("/");
      const result = await response.json();
      console.log(result);
      //showLandscapes(result);
    } catch (err) {
      console.log(err);
    }
  }