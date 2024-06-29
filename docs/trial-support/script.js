document.addEventListener('DOMContentLoaded', function() {
    fetch('documentation.json') // Assuming your JSON file is named 'documentation.json'
        .then(response => response.json())
        .then(data => {
            data.pages.forEach(page => {
                createPage(page);
            });
        })
        .catch(error => console.error('Error fetching documentation:', error));

    function createPage(pageData) {
        const pageElement = document.createElement('div');
        pageElement.classList.add('page');

        const titleElement = document.createElement('h2');
        titleElement.textContent = pageData.title;

        const contentElement = document.createElement('div');
        contentElement.innerHTML = pageData.content;

        pageElement.appendChild(titleElement);
        pageElement.appendChild(contentElement);

        document.getElementById('documentation').appendChild(pageElement);
    }

    // Add event listeners or any other dynamic functionality here
});
