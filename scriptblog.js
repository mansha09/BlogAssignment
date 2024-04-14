// Function to fetch and display XML data
function fetchXMLData() {
    fetch('blog.xml') // Path to your XML file
      .then(response => response.text())
      .then(data => {
        // Parse XML data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        
        // Get all <article> elements from the XML
        const articles = xmlDoc.querySelectorAll('article');
        
        // Display each article
        articles.forEach(article => {
          const title = article.querySelector('title').textContent;
          const content = article.querySelector('content').innerHTML;
          
          // Create HTML content for the article
          const articleHTML = `
            <article>
              <h3>${title}</h3>
              <p>${content}</p>
            </article>
          `;
          
          // Append the article HTML to the container
          document.getElementById('articles-container').innerHTML += articleHTML;
        });
      })
      .catch(error => console.error('Error fetching XML data:', error));
  }
  
  // Call the function to fetch XML data when the page loads
  window.onload = fetchXMLData;
  

