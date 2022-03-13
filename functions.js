function createPopUp(element) {
  return `<h2>${element.properties.name}</h2>
    <h3>${element.properties.tourism}</h3>`;
}
function getCoords(element){
  return [element.geometry.coordinates[1],element.geometry.coordinates[0]]
}
