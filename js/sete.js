var parts = ["info", "mailt", 64, "ion.co.uk", "sjgdrivingtuit", "o:", "?subject=Driving lesson enquiry"];

var lnke = document.getElementById("lnke");
var lnkf = document.getElementById("lnkf");
var lnkg = document.getElementById("lnkg");
var lnkh = document.getElementById("lnkh");

lnke.textContent = parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3];
lnke.href = parts[1] + parts[5] + parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3] + parts[6];
lnkf.textContent = parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3];
lnkf.href = parts[1] + parts[5] + parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3] + parts[6];
if (lnkg) {
  lnkg.textContent = parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3];
  lnkg.href = parts[1] + parts[5] + parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3] + parts[6];
}
if (lnkh) {
  lnkh.href = parts[1] + parts[5] + parts[0] + String.fromCharCode(parts[2]) + parts[4] + parts[3] + parts[6];
}