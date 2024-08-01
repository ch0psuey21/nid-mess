import "./style.css";

const yourPlate = [
  {
    name: "Man Sedentary",
    calories: 2110,
    code: "MS",
  },
  {
    name: "Man Moderate",
    calories: 2710,
    code: "MM",
  },
  {
    name: "Man Heavy Work",
    calories: 3470,
    code: "MH",
  },
  {
    name: "Woman Sedentary",
    calories: 1660,
    code: "WS",
  },
  {
    name: "Woman Moderate",
    calories: 2130,
    code: "WM",
  },
  {
    name: "Woman Heavy Work",
    calories: 2720,
    code: "WH",
  },
];

// Function to create the dropdown and append it to the element with id 'your-plate-dropdown'
function createDropdown() {
  const container = document.getElementById("your-plate-dropdown");
  const select = document.createElement("select");

  // Create and append options to the select element
  yourPlate.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.code;
    option.textContent = item.name;
    select.appendChild(option);
  });

  // Attach event listener for change events
  select.addEventListener("change", function () {
    const selectedCode = this.value;
    const image = document.getElementById("plate-image");

    // Apply fade-out effect
    image.classList.add("fade-out");

    // Wait for fade-out transition to complete before changing the image source
    setTimeout(() => {
      image.src = `your-plate/${selectedCode}.svg`;

      // Wait for the image to load before applying the fade-in effect
      image.onload = () => {
        image.classList.remove("fade-out");
      };
    }, 500); // Match the fade-out duration (in milliseconds)
  });

  // Append the select element to the container
  container.appendChild(select);
}

// Call the function to create the dropdown
createDropdown();
