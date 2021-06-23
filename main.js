var array_of_guest_list=[];
function addguest() {
    var name=document.getElementById("guestlist").value;
    array_of_guest_list.push(name);
    document.getElementById("guestlist").value="";
}
function showlist() {
    document.getElementById("namesofguest").innerHTML=array_of_guest_list;
}
function namesinorder() {
    array_of_guest_list.sort();
    document.getElementById("sortednames").innerHTML=array_of_guest_list;
}