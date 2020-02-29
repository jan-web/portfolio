let wrapper = document.querySelector(".pricing-table"), 
frame = document.querySelector(".frame"), 
newFrame = frame.cloneNode(true),
arrCars = [
  [
    "Mercedes",
    "S600",
    30000,
    2800,
    "gazoline",
    "red",
    "https://pbs.twimg.com/profile_images/378800000397745154/c2e7dd2fb8710bd674eda7a580dc5ca4.jpeg"
  ],
  [
    "BMW",
    "X6",
    56000,
    3400,
    "dizel",
    "white",
    "https://images-na.ssl-images-amazon.com/images/I/41d50fIRA-L._CR160,0,480,480_UX256.jpg"
  ],
  [
    "OPEL",
    "CORSA",
    14000,
    2400,
    "gazoline",
    "orange",
    "https://pbs.twimg.com/profile_images/737559166433140737/lUAdmnTJ_400x400.jpg"
  ]
];

function createCar(nextCar) {
  nextCar.render(".package-name", nextCar.brand);
  nextCar.render(".disclaimer", nextCar.name);
  nextCar.render(".price", "$" + nextCar.price);
  nextCar.render(
    ".features",
    `<li>weight of car ${nextCar.weight} kg.</li>
                  <li>type of fuel ${nextCar.fuel_type}</li>
                  <li>color ${nextCar.color}</li>
                  <li><img src="${nextCar.img}" alt="${nextCar.brand} ${nextCar.name}" ></li>`
  );
}

for (let i = 0; i < arrCars.length; i++) {
  let car = new Car(
    arrCars[i][0],
    arrCars[i][1],
    arrCars[i][2],
    arrCars[i][3],
    arrCars[i][4],
    arrCars[i][5],
    arrCars[i][6]
  );

  createCar(car);
  wrapper.prepend(newFrame);
  if (i < arrCars.length - 2) {
    newFrame = frame.cloneNode(true);
  }
}
