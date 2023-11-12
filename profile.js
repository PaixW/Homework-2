
fetch("http://localhost:5000/api/user", {
  method: "GET",
  credentials: "include", 
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(response => response.json())
  .then(data => processDate(data))
  .catch(error => console.error("Error fetching user data:", error));

function processDate(data) {
  
  console.log(data);
}


function save() {
  const data = {
    first_name: document.getElementById("userfirstname").value,
    last_name: document.getElementById("userlastname").value,
    email: "luckyone@flightmode.com",
    phone: document.getElementById("phone").value,
    description: document.getElementById("description").value,
    address: document.getElementById("Delivery").value,
    billing: document.getElementById("billing").value,
  };

  fetch("http://localhost:5000/api/user", {
    method: "POST",
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => processRequestToSendDataResponse(data))
    .catch(error => console.error("Error sending user data:", error));
}

function processRequestToSendDataResponse(response) {
  document.getElementById("Title").innerHTML = "Saved! " + response.data[0].first_name;
  console.log(response);
}
