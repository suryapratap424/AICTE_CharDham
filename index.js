var layer = L.markerClusterGroup();
var options = new Set();
var optList = document.getElementById("option");
x.features.forEach((element) => options.add(element.properties.tourism));
function showdataonmap(arr) {

  layer.clearLayers(); //resets markers

  arr.forEach((element) => {
    let d = L.marker(getCoords(element)).bindPopup(createPopUp(element));
    layer.addLayer(d);
  });
  layer.addTo(myMap);
  options.forEach((option) => optList.add(new Option(option, option)));

}

showdataonmap(x.features);//runs when first time page loaded

optList.onchange = function () {
  let selected = optList.options[optList.selectedIndex].value;
  if (selected == "none") {
    filtered = x.features;
  } else {
    filtered = x.features.filter((val) => val.properties.tourism == selected);
  }
  // console.log(filtered);
  showdataonmap(filtered);//running for updated array
};
