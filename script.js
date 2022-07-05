let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubesWrapper = document.getElementById('cubic-container');

numArray.forEach((item, i) => {
  cubesWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})
shuffle = () => {
  let i = 0
  numArray = numArray.sort(() => { return .5 - Math.random() });
  cubesWrapper.innerHTML = ''
  while (i < numArray.length) {
    let cubesItem = document.createElement("li");
    cubesItem.innerHTML = numArray[i]
    cubesItem.setAttribute('data-item', numArray[i])
    cubesWrapper.appendChild(cubesItem)
    ++i;
  }
}
sort = () => {
  let i = 0
  numArray = numArray.sort((a, b) => { return a - b });
  cubesWrapper.innerHTML = ''
  while (i < numArray.length) {
    let cubesItem = document.createElement("li");
    cubesItem.innerHTML = numArray[i]
    cubesItem.setAttribute('data-item', numArray[i])
    cubesWrapper.appendChild(cubesItem)
    ++i;
  }
}

