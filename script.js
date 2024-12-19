const searchBar = document.getElementById('search-bar');
const searchResults = document.createElement('div');
searchResults.id = 'search-results';
document.body.appendChild(searchResults);

searchBar.addEventListener('input', async (event) => {
  const query = event.target.value;
  if (query.trim() !== '') {
    // Replace 'YOUR_API_KEY' with your actual Gemini AI API key
    const response = await fetch('`https://www.googleapis.com/customsearch/v1?key=${AIzaSyC0nu4T4c9b1OLQwR4FLNjVgzPKZchTrwg}&cx=${b08d0243a3fa44f2f}&q=${query}`;', {
      method: 'POST',
      headers: {
        'Authorization': 'AIzaSyC0nu4T4c9b1OLQwR4FLNjVgzPKZchTrwg',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    });

    const data = await response.json();
    searchResults.innerHTML = '';
    data.results.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = result.title;
      searchResults.appendChild(resultDiv);
    });
  } else {
    searchResults.innerHTML = '';
  }
});