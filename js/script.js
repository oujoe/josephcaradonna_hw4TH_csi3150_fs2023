//From usedCars.js file provided on Moodle
const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "./img/2018silvercamry.jpg",
    //Image from https://www.toyotaofgreenville.com/2018-toyota-camry-xle-v6.htm
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "./img/2016whitecivic.jpg",
    //Image from https://www.ameshonda.com/certified/Honda/2016-Honda-Civic-ames-bf5615920a0e0a9911d07274157dda17.htm
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "./img/2017blackfusion.jpg",
    //Image from https://www.depaulaford.com/wmp/new/2017-ford-fusion-albany-ny/
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "./img/2019bluealtima.jpg",
    //Image from https://cars.usnews.com/cars-trucks/nissan/altima/2019/photos-exterior-colors
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "./img/2015redmalibu.jpg",
    //Image from https://cars.usnews.com/cars-trucks/chevrolet/malibu/2015/photos-exterior-colors
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "./img/2016graypassat.jpg",
    //Image from https://cars.usnews.com/cars-trucks/volkswagen/passat/2016
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "./img/2020silverelantra.jpg",
    //Image from https://www.goldenstateinfiniti.com/inventory/Used-2020-Hyundai-Elantra/
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "./img/2014greenoutback.jpg",
    //Image from https://cars.usnews.com/cars-trucks/subaru/outback/2014/photos-exterior-colors
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "./img/2017bluecx5.jpg",
    //Image from https://www.pinterest.jp/pin/662240320180192315/
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "./img/2018whitesorento.jpg",
    //Image from https://www.chrisauffenberg.com/blog/2018-kia-sorento-interior-and-exterior-color-options/
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "./img/2015blackchal.webp",
    //Image from https://www.autoblog.com/buy/2015-Dodge-Challenger-SRT_Hellcat__Rear_Wheel_Drive_Coupe/photos/
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "./img/2017redxt5.webp",
    //Image from https://www.autoblog.com/buy/2017-Cadillac-XT5/photos/
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "./img/2018bluefpace.jpg",
    //Image from https://www.pinterest.com/pin/blue-jaguar-f-pace-car-png-image--692921092647068580/
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "./img/2018blackmodels.jpg",
    //Image from https://medium.com/dallas-design-sprints/chill-mode-the-hidden-gem-in-every-tesla-car-93e0de28b124
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "./img/2019whitecayenne.jpg",
    //Image from https://www.porschefremont.com/porsche-cayenne-colors/
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "./img/2017whites.jpg",
    //Image from https://www.carmax.com/research/lexus/es-350/2017
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "./img/2016black5.webp",
    //Image from https://www.consumerreports.org/cars/bmw/5-series/2016/overview/
  },
];

// Dynamic function to display cars from provided list
function carCards() {
  const carContainer = document.getElementById("carCards");

  // get all data from usedCars info as variables
  usedCars.forEach((usedCar) => {
    usedCar.year = usedCar.year;
    usedCar.make = usedCar.make.toLocaleString();
    usedCar.model = usedCar.model.toLocaleString();
    usedCar.mileage = usedCar.mileage.toLocaleString();
    usedCar.price = usedCar.price.toLocaleString();
    usedCar.color = usedCar.color.toLocaleString();
    usedCar.gasMileage = usedCar.gasMileage.toLocaleString();

    // generate the card for each car
    const carCard = document.createElement("div");
    carCard.id = "carCard";
    carCard.innerHTML = `
    
    <img src="${usedCar.image}" alt="Image of a ${usedCar.year} ${usedCar.make} ${usedCar.model}">
    <div id="info">
    <h3>${usedCar.year} ${usedCar.make} ${usedCar.model}</h3>
    <p>Mileage: ${usedCar.mileage}</p>
    <p>Color: ${usedCar.color}</p>
    <p>Gas Mileage: ${usedCar.gasMileage}</p>
    <p>Price: $${usedCar.price}</p>
    </div>
    `;
    carContainer.appendChild(carCard);
  });
}
//call function
carCards();

//filter modified from https://www.w3schools.com/howto/howto_js_filter_lists.asp
function carFilter() {
  document.getElementById("carCards").innerHTML = "";

  let minimumYear = document.getElementById("minimumYear").value;
  let maximumYear = document.getElementById("maximumYear").value;

  usedCars.forEach((usedCar) => {
    usedCar.year = usedCar.year;
    usedCar.make = usedCar.make.toLocaleString();
    usedCar.model = usedCar.model.toLocaleString();
    usedCar.mileage = usedCar.mileage.toLocaleString();
    usedCar.price = usedCar.price.toLocaleString();
    usedCar.color = usedCar.color.toLocaleString();
    usedCar.gasMileage = usedCar.gasMileage.toLocaleString();

    if (usedCar.year >= minimumYear && usedCar.year <= maximumYear) {
      const carContainer = document.getElementById("carCards");
      // generate the card for each car
      const carCard = document.createElement("div");
      carCard.id = "carCard";
      carCard.innerHTML = `
    
    <img src="${usedCar.image}" alt="Image of a ${usedCar.year} ${usedCar.make} ${usedCar.model}">
    <div id="info">
    <h3>${usedCar.year} ${usedCar.make} ${usedCar.model}</h3>
    <p>Mileage: ${usedCar.mileage}</p>
    <p>Color: ${usedCar.color}</p>
    <p>Gas Mileage: ${usedCar.gasMileage}</p>
    <p>Price: $${usedCar.price}</p>
    </div>
    `;
      carContainer.appendChild(carCard);
    } else if (minimumYear > 2020 ){
      document.getElementById("carCards").innerHTML = "No cars match the selected criteria. Please try again.";
    } else if (maximumYear < 2014 ){
      document.getElementById("carCards").innerHTML = "No cars match the selected criteria. Please try again.";
    }
  });
}
