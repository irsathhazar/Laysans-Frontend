async function fetchClients() {
    try {
        const response = await fetch('https://laysans-backend.onrender.com/client/'); // Adjust the URL to your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const clients = await response.json();
        displayClients(clients);
    } catch (error) {
        console.error('Error fetching clients:', error);
    }
}

// Function to display clients in the HTML
function displayClients(clients) {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = ''; // Clear existing content

    clients.forEach(client => {
        const clientItem = document.createElement('div');
        clientItem.className = 'col-lg-6 col-md-4 col-sm-12 portfolio-item filter-web';
        clientItem.innerHTML = `
            <div class="portfolio-wrap">
                <iframe class="embed-responsive-item" src="${client.Link}" allowfullscreen scrolling="no" style="width: 100%; height: 300px;"></iframe>
                <div class="portfolio-info text-center">
                    <h4>${client.Productname}</h4>
                    <div class="portfolio-links">
                        <a href="${client.Link}" target="_blank" class="portfolio-lightbox" title="${client.name}"><i class="fas fa-link"></i></a>
                    </div>
                </div>
            </div>
        `;
        clientList.appendChild(clientItem);
    });
}

// Fetch clients when the page loads
window.onload = fetchClients;
