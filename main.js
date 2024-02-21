const data = document.getElementById("data");
const temp = document.getElementById("temp").value;
const buttonModal = document.getElementById("buttonModal");
const modal = document.getElementById("myModal");
const content = document.getElementById("content");
const close = document.getElementsByClassName("close");
const body = document.getElementsByTagName("body");

function showDisplay() {
  const option = document.getElementById("option").value;
  if (option == 1 || option == 2) {
    document.getElementById("display").style.display = "block";
  } else {
    window.alert("OPTION INVALID, TRY AGAIN...");
  }
}

function conversion() {
  modal.style.display = "block";

  const option = document.getElementById("option").value;
  if (option == 1) {
    const cel_to_fah = temp * 1.8 + 32;
    content.append(`CELSIUS to FAHRENHEIT:  ${cel_to_fah}°F`);
  } else if (option == 2) {
    const fah_to_cel = (temp - 32) * 0.5556;
    content.append(`FAHRENHEIT to CELSIUS:  ${fah_to_cel}°C`);
		
  }
}

function closeModal() {
  window.location.reload();
  modal.style.display = "none";
  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
}

