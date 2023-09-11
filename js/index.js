let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove 'active' class from all links
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        
        // Add 'active' class to clicked link
        this.classList.add("active");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let navItems = document.querySelectorAll('.nav-list a');

    navItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Remove the active class from all other nav items
            navItems.forEach(function(innerItem) {
                innerItem.classList.remove('active');
            });

            // Add the active class to the clicked item
            item.classList.add('active');

            // Optional: Navigate to the href of the clicked link
            // location.href = item.getAttribute('href');
        });
    });
});



function selectPill(pillElement) {
    // First, remove 'active' class from all pills
    document.querySelectorAll('.pill').forEach(pill => {
        pill.classList.remove('active');
    });

    // Then, add 'active' class to the clicked pill
    pillElement.classList.add('active');
}



