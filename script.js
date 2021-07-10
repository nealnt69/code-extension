function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(function () {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
                              <div class="wrap-copy-paste">
                                  <div id="button-paste">Paste</div>
                              </div>
                        `
  );

  $("#button-paste").click(async function () {
    try {
      const dataCopy = JSON.parse(await navigator.clipboard.readText());
      $("#contactPerson").focus();
      $("#contactPerson").val(dataCopy.name);
      $("#contactPerson").sendkeys(" ");
      $("#mobileNo").focus();
      $("#mobileNo").val("00000");
      $("#mobileNo").sendkeys("0");
      $("#mobileNo").sendkeys["{del}"];
      $("#address").focus();
      $("#address").val(
        `${dataCopy.address1} ${
          dataCopy.address2 ? "," + dataCopy.address2 : ""
        }`
      );
      $("#address").sendkeys(" ");
      $("#address2").focus();
      $("#address2").val(
        `${dataCopy.city.toString().toUpperCase()}, ${
          lib.filter(
            (item) =>
              item.key.toString().toUpperCase() ==
              dataCopy.state.toString().toUpperCase()
          )[0].value
            ? lib
                .filter(
                  (item) =>
                    item.key.toString().toUpperCase() ==
                    dataCopy.state.toString().toUpperCase()
                )[0]
                .value.toUpperCase()
            : dataCopy.state.toString().toUpperCase()
        }`
      );
      $("#address2").sendkeys(" ");
      $("#zip").focus();
      $("#zip").val(dataCopy.code);
      $("#zip").sendkeys(" ");
    } catch (error) {
      console.log(error);
      alert("Vui lòng copy trước");
    }
  });
});

const lib = [
  {
    key: "AL",
    value: "Alabama",
  },
  {
    key: "AK",
    value: "Alaska",
  },
  {
    key: "AZ",
    value: "Arizona",
  },
  {
    key: "AR",
    value: "Arkansas",
  },
  {
    key: "CA",
    value: "California",
  },
  {
    key: "CO",
    value: "Colorado",
  },
  {
    key: "CT",
    value: "Connecticut",
  },
  {
    key: "DE",
    value: "Delaware",
  },
  {
    key: "DC",
    value: "Washington D.C.",
  },
  {
    key: "FL",
    value: "Florida",
  },
  {
    key: "GA",
    value: "Georgia",
  },
  {
    key: "HI",
    value: "Hawaii",
  },
  {
    key: "ID",
    value: "Idaho",
  },
  {
    key: "IL",
    value: "Illinois",
  },
  {
    key: "IN",
    value: "Indiana",
  },
  {
    key: "IA",
    value: "Iowa",
  },
  {
    key: "KS",
    value: "Kansas",
  },
  {
    key: "KY",
    value: "Kentucky",
  },
  {
    key: "LA",
    value: "Louisiana",
  },
  {
    key: "ME",
    value: "Maine",
  },
  {
    key: "MD",
    value: "Maryland",
  },
  {
    key: "MA",
    value: "Massachusetts",
  },
  {
    key: "MI",
    value: "Michigan",
  },
  {
    key: "MN",
    value: "Minnesota",
  },
  {
    key: "MS",
    value: "Mississippi",
  },
  {
    key: "MO",
    value: "Missouri",
  },
  {
    key: "MT",
    value: "Montana",
  },
  {
    key: "NE",
    value: "Nebraska",
  },
  {
    key: "NV",
    value: "Nevada",
  },
  {
    key: "NH",
    value: "New Hampshire",
  },
  {
    key: "NJ",
    value: "New Jersey",
  },
  {
    key: "NM",
    value: "New Mexico",
  },
  {
    key: "NY",
    value: "New York",
  },
  {
    key: "NC",
    value: "North Carolina",
  },
  {
    key: "ND",
    value: "North Dakota",
  },
  {
    key: "OH",
    value: "Ohio",
  },
  {
    key: "OK",
    value: "Oklahoma",
  },
  {
    key: "OR",
    value: "Oregon",
  },
  {
    key: "PA",
    value: "Pennsylvania",
  },
  {
    key: "RI",
    value: "Rhode Island",
  },
  {
    key: "SC",
    value: "South Carolina",
  },
  {
    key: "SD",
    value: "South Dakota",
  },
  {
    key: "TN",
    value: "Tennessee",
  },
  {
    key: "TX",
    value: "Texas",
  },
  {
    key: "UT",
    value: "Utah",
  },
  {
    key: "VT",
    value: "Vermont",
  },
  {
    key: "VA",
    value: "Virginia",
  },
  {
    key: "WA",
    value: "Washington",
  },
  {
    key: "WI",
    value: "Wisconsin",
  },
  {
    key: "WY",
    value: "Wyoming",
  },
  {
    key: "AS",
    value: "American Samoa",
  },
  {
    key: "GU",
    value: "Guam",
  },
  {
    key: "PR",
    value: "Puerto Rico",
  },
];
