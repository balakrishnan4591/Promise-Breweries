async function fetchBreweries() {
  try {
    //fetch api
    let response = await fetch("https://api.openbrewerydb.org/v1/breweries");

    let brewerieslist = await response.json();

    //get total count of available breweries
    let count = brewerieslist.length;

    //list the breweries in a table along with a website redirection
    for (i = 0; i < count; i++) {
      var table = document.getElementById("brewers_table");

      var row = table.insertRow(i + 1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);

      cell1.outerHTML = `<th> ${i}</th>`;
      cell2.innerHTML = brewerieslist[i].name;
      cell3.innerHTML = brewerieslist[i].brewery_type;
      cell4.innerHTML = brewerieslist[i].address_1;
      cell5.innerHTML = brewerieslist[i].city;
      cell6.innerHTML = brewerieslist[i].postal_code;

      cell7.innerHTML = brewerieslist[i].country;

      cell8.innerHTML = `<a href="${brewerieslist[i].website_url}" target="_blank">${brewerieslist[i].website_url}</a>`;
    }
  } catch (e) {
    console.error(e);
  }
}

fetchBreweries();
