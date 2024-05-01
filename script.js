document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = this.getAttribute('data-page');
        loadPage(page);
      });
    });
  
    // function loadPage(page) {
    //   fetch(page + '.html')
    //     .then(response => response.text())
    //     .then(html => {
    //       document.querySelector('.content').innerHTML = html;
    //     })
    //     .catch(error => console.error('Error fetching page:', error));
    // }
  
    loadPage('index');
  });
  