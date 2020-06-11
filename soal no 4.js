let areYouSure = confirm("Apakah anda mau mengulang");
let jumlah = "";
while (areYouSure == true) {
    areYouSure = confirm("Apakah anda mau mengulang");
    jumlah++;
}
document.write("Perulangan sudah dilakukan sebanyak " + jumlah);
