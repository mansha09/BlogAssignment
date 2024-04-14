
      function initMap() {
        var petSmartLocation = {lat: 51.0461, lng: -114.0579}; // Coordinates for Pet Smart
        var doggieeLocation = {lat: 51.0486, lng: -114.0708}; // Coordinates for Doggiee

        var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 15, center: petSmartLocation});

      }
    
    
              /* Back button */

             document.getElementById("backBtn").addEventListener("click", function() {
         // Redirect to Blog.html
         window.location.href = "Blog.html";
         });
        /* Jason file */           
         fetch('data.json')
          .then(response => response.json())
          .then(data => {
        
        document.getElementById('email').innerText = data.email;
         document.getElementById('address').innerText = data.address;
      document.getElementById('phone').innerText = data.phone;
         })
         .catch(error => console.error('Error fetching JSON:', error));

