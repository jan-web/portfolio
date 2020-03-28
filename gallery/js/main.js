(function() {
  let btn = document.getElementById("play"),
    secondBlock = document.querySelector("#second-line"),
    typeSorting = document.querySelector("#type-sorting"),
    imagesleft = document.querySelector(".imagesleft"),
    rightArr = transform(data),
    last = 0,
    typeSortstorage = localStorage.getItem("typeSort"),
    e = {
      target: {
        value: typeSortstorage
      }
    };
    imagesleft.innerHTML = `There are ${rightArr.length - last} pictures left`;

  swithSorting(e);

  secondBlock.addEventListener("click", removeElement);

  // Ф. убираем картинку которая выбрана
  function removeElement(event) {
    rightArr[event.target.accessKey].show = false;
    // перерисовываем все картинки из актуального массива
    actualRender();
  }

  function actualRender() {
    secondBlock.innerHTML = "";
    let i = 0;
    rightArr.map(function(element) {
   
      if (element.show) {
        render(rightArr[i]);
      }
      i++;
      return true;
    });
  }

  // ФУНКЦИЯ Галлерея построенная с помощью шаблонных строк
  function render(item) {
    secondBlock.innerHTML =
      secondBlock.innerHTML +
      `<div class="col-md-3 col-sm-4 col-xs-6 text-center">\
              <div class="thumbnail">\
                <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
                  <div class="caption">\
                      <div class="text-muted">${item.name}</div>\
                      <div class="text-muted top-padding">${item.description}</div>\
                      <div class="text-muted">${item.date}</div>\
                  </div>\
                <button class="btn btn-danger" accessKey="${item.id}">Удалить</button>\
              </div>\
            </div>`;
  }
  // Формируем ноый массив с отобранными данными
  function transform(data) {
    let newMapArr = data.map(function(key) {
      let upName = key.name.toLowerCase();
      upName = upName[0].toUpperCase() + upName.slice(1);
      const newData = new Date(key.date);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return {
        url: "http://" + key.url,
        name: upName,
        id: key.id - 1,
        show: false,
        description: key.description.substr(0, 15) + "...",
        date:
          monthNames[newData.getMonth()] +
          " " +
          newData.getDate() +
          ", " +
          newData.getFullYear()
      };
    });

    return newMapArr;
  }

  function sortingAZ() {
    let tempArr = rightArr.sort(function(a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    afterSorting(tempArr);
  }

  function afterSorting(arr) {
    let elementCount = 0;
    rightArr = arr.map(function(element) {
      element.id = elementCount;
      elementCount++;
      return element;
    });
  }

  function sortingZA() {
    let tempArr = rightArr.sort(function(a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA > nameB) {
        return -1;
      } else if (nameA < nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    afterSorting(tempArr);
  }

  function sortingNewfirst() {
    let tempArr = rightArr.sort(function(a, b) {
      let dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateB - dateA; //сортировка по возрастающей дате
    });
    afterSorting(tempArr);
  }

  function sortingOldfirst() {
    let tempArr = rightArr.sort(function(a, b) {
      let dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateA - dateB; //сортировка по низпадающей дате
    });
    afterSorting(tempArr);
  }
  //слушаем выпадающий список
  typeSorting.addEventListener("change", function(e) {
    swithSorting(e);
  });

  function swithSorting(e) {
    console.log("e.target.value= " + e.target.value);
    let number = e.target.value;
    console.log("number = " + number);

    if (e.target.value == 1) {
      console.log("Case 1");
      sortingAZ();
      actualRender();
    } else if (e.target.value == 2) {
      console.log("Case 2");
      sortingZA();
      actualRender();
    } else if (e.target.value == 3) {
      console.log("Case 3");
      sortingNewfirst();
      actualRender();
    } else if (e.target.value == 4) {
      console.log("Case 4");
      sortingOldfirst();
      actualRender();
    }
    localStorage.setItem("typeSort", e.target.value);
  }

  btn.addEventListener("click", function() {

    if (last == rightArr.length) {
      $("#myModal").modal("show");
    } else {
      rightArr[last].show = true; //помечаем последний выбранный элемент как актуальный

      actualRender();
      last++;
      imagesleft.innerHTML = `There are ${rightArr.length -
        last} pictures left`;
    }
  });
})();
