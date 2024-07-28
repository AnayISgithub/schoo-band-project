// Function to add 'active' class to the current tab
function setActiveTab() {
  const tabs = document.querySelectorAll('.tablinks');
  tabs.forEach(tab => {
    if (tab.href === window.location.href) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// Run the function when the page loads
window.onload = setActiveTab;