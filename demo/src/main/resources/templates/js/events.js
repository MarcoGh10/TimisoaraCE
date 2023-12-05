document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("events-container");
  
    // Simulare date evenimente (aceste date pot fi preluate dintr-un API real)
    const eventsData = [
      {
        name: "Floating Earth by Luke Jerram | Lights On Bega",
        location: "Bega",
        date: "01-12-2023",
        price: "FREE",
        imageUrl: "img/luna.jpg"
      },
      {
        name: "Roads through the Forest - workshops with Waldorf High School Timisoara",
        location: "Waldorf Highschool Timișoara",
        date: "05-12-2023",
        price: "FREE",
        imageUrl: "img/e2.jpg"
      },
      {
        name: "Timișoara: Free City, Free Spirit | Budapest",
        location: "-",
        date: "05-12-2023",
        price: "FREE",
        imageUrl: "img/e3.jpg"
      },
      {
        name: "Nume eveniment 4",
        location: "Locație 2",
        date: "02-01-2023",
        price: "75 RON",
        imageUrl: "url_imagini/eveniment2.jpg"
      },
      {
        name: "Nume eveniment 5",
        location: "Locație 2",
        date: "02-01-2023",
        price: "75 RON",
        imageUrl: "url_imagini/eveniment2.jpg"
      },
      



    ];
  
    function displayEvents(events) {
      events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
  
        const image = document.createElement("img");
        image.src = event.imageUrl;
        image.alt = event.name;
        eventCard.appendChild(image);
  
        const details = document.createElement("div");
        details.classList.add("event-details");
  
        const name = document.createElement("h2");
        name.textContent = event.name;
        details.appendChild(name);
  
        const location = document.createElement("p");
        location.textContent = `Locație: ${event.location}`;
        details.appendChild(location);
  
        const date = document.createElement("p");
        date.textContent = `Data: ${event.date}`;
        details.appendChild(date);
  
        const price = document.createElement("p");
        price.textContent = `Preț: ${event.price}`;
        details.appendChild(price);
  
        eventCard.appendChild(details);
        eventsContainer.appendChild(eventCard);
      });
    }
  
    displayEvents(eventsData);
  });
  