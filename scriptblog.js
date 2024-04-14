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
  

// Function to fetch and display JSON data
function fetchJSONData() {
    fetch('blog_data.json') // Path to your JSON file
      .then(response => response.json())
      .then(data => {
        const articles = data.articles;
        const blogContent = document.getElementById('blogContent');
  
        articles.forEach(article => {
          const articleElement = document.createElement('article');
          articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
          `;
          blogContent.appendChild(articleElement);
        });
      })
      .catch(error => console.error('Error fetching JSON data:', error));
  }
  
  // Call the function to fetch JSON data when the page loads
  window.onload = fetchJSONData;
  