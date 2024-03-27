const scrollEl = document.querySelector(".our-doctor__cards");
const citiesCenterEl = document.querySelector(".our-location__cities-centers");
const mapContainerEl = document.querySelector(".our-locations__map");

function scrollToCenter() {
  const container = scrollEl;
  const cards = container.querySelectorAll(".our-doctor__cards");
  const containerWidth = container.offsetWidth;
  const cardsWidth = Array.from(cards).reduce(
    (acc, card) => acc + card.offsetWidth,
    0
  );
  const scrollPosition = (cardsWidth - containerWidth) / 2;
  container.scrollLeft = scrollPosition;
}

window.addEventListener("resize", () => {
  scrollToCenter();
});

let citiAndData = [
  {
    id: "cityBtn1",
    city_name: "Sangareddy",
    pincode: 201206,
    centers: [
      {
        centerId: "center1",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
      {
        centerId: "center2",
        center_name: "CION Cancer Clinics Hyderabad",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
      {
        centerId: "center3",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
      {
        centerId: "center4",
        center_name: "CION Cancer Clinics Hyderabad",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn2",
    city_name: "Mahboobnagar",
    pincode: 201206,
    centers: [
      {
        centerId: "center5",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn3",
    city_name: "Hyderabad",
    pincode: 201206,
    centers: [
      {
        centerId: "center6",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn4",
    city_name: "Siddipet",
    pincode: 201206,
    centers: [
      {
        centerId: "center7",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn5",
    city_name: "Shadnagar",
    pincode: 201206,
    centers: [
      {
        centerId: "center8",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn6",
    city_name: "Kamareddy",
    pincode: 201206,
    centers: [
      {
        centerId: "center9",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn7",
    city_name: "Vizianagaram",
    pincode: 201206,
    centers: [
      {
        centerId: "center10",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: "cityBtn8",
    city_name: "Medak",
    pincode: 201206,
    centers: [
      {
        centerId: "center11",
        center_name: "CION Cancer Clinics",
        center_address:
          "1st Floor, Park View Building, Road No. 1, Jubilee Hills, Hyderabad 500 033 Telangana, latitude",
        map_url:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.47300003054!2d78.36469782525963!3d17.43434995112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cb8c494053%3A0x4da3f7e6dc208bb1!2sCion%20Cancer%20Clinics-%20Cancer%20Hospital%20in%20Hyderabad%20-%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1685958356509!5m2!1sen!2sin",
      },
    ],
  },
];

let selectedCity = citiAndData[0];
let selectedCityId = citiAndData[0].id;
let selectedCenter = selectedCity.centers[0];

function updateMap(currentUrl) {
  mapContainerEl.textContent = "";
  mapContainerEl.innerHTML = `
  <iframe src="${currentUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
  console.log(`
  <iframe src="${currentUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `)
}

function onClickCenter(event) {
  let idText = event.target.id;
  let currentUrl = event.target.dataset.directionUrl;
  updateMap(currentUrl);
}

function createCenterEl(center) {
  const centerEl = document.createElement("div");
  centerEl.classList.add("our-location__center");
  centerEl.id = center.centerId;


  centerEl.innerHTML = `
      <h1 class="our-location__center-name">
          ${center.center_name}
      </h1>
      <p class="our-location__center-address">
        ${center.center_address}
      </p>
      <div class="our-location__center-buttons">
          <button class="outline-button" data-callUs-num="989">
              <img src="./assets/call-us-image.webp" alt="">
              Call Us
          </button>
          <button class="filled-button" onclick="onClickCenter(event)" data-direction-url="${center.map_url}">
              <img src="./assets/direction.webp" alt="">
              Directions
          </button>
      </div>
  `;

  return centerEl;
}

function updateCenter() {
  let centers = selectedCity.centers;
  citiesCenterEl.textContent = "";
  for (let center of centers) {
    const readyMadeEl = createCenterEl(center);
    citiesCenterEl.appendChild(readyMadeEl);
  }
}

function updateCity(event) {
  selectedCityId = event.target.id;
  for (let item of citiAndData) {
    let btnEl = document.getElementById(item.id);
    if (item.id === selectedCityId) {
      btnEl.classList.add("selected-city");
      selectedCity = item;
      updateCenter();
    } else {
      btnEl.classList.remove("selected-city");
    }
  }
}
