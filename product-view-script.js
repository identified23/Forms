// script.js
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const content = document.getElementById("content");
  
    // Event listener for tab clicks
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));
        // Add active class to the clicked tab
        tab.classList.add("active");
  
        // Load corresponding content based on the tab clicked
        const tabName = tab.getAttribute("data-tab");
        loadTabContent(tabName);
      });
    });
  
    // Function to load content dynamically
    function loadTabContent(tabName) {
      let contentHTML = "";
      switch (tabName) {
        case "overview":
          contentHTML = `
           <section class="primary-details">
        <h3>Primary Details</h3>
        <div class="details">
          <div>
            <p><strong>Product Name:</strong> </p>
            <p><strong>Product ID:</strong> </p>
            <p><strong>Product Category:</strong> </p>
            <p><strong>Expiry Date:</strong> </p>
          </div>
          <div class="image-placeholder"></div>
        </div>
      </section>

      <section class="stock-details">
        <div class="image-placeholder"></div>
        <p><strong>Opening Stock:</strong></p>
        <p><strong>Remaining Stock:</strong></p>
        <p><strong>On the Way:</strong></p>
      </section>

    <section class="supplier-details">
          <h3>Supplier Details</h>
          <p><strong>Supplier Name:</strong> </p>
          <p><strong>Contact Number:</strong> </p>
        </section>`;
          break;
  
  
        case "history":
          contentHTML = `
            <section class="history-section">
              <h2>History</h2>
              <p>No history available yet.</p>
            </section>`;
          break;
  
        default:
          contentHTML = `<p>Invalid tab selected.</p>`;
          break;
      }
  
      // Update the content area
      content.innerHTML = contentHTML;
    }
  
    // Load the default tab (Overview) on page load
    loadTabContent("overview");
  });
  