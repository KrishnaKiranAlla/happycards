// function copyAddress(sameAsBilling) {
	
// 	var fullName = document.getElementById('fullname').value;
// 	var surName = document.getElementById('surname').value;
// 	var mail = document.getElementById('mail').value;
// 	var mobile = document.getElementById('mobile').value;
// 	var door = document.getElementById('door').value;
// 	var lane = document.getElementById('lane').value;
//   var country = document.getElementById('country').value;
//   var city = document.getElementById('city').value;
//   var pincode = document.getElementById('pincode').value;
	
// 	var copy_fullName = document.getElementById('fullname1');
// 	var copy_surName = document.getElementById('surname1');
// 	var copy_mail = document.getElementById('mail1');
// 	var copy_mobile = document.getElementById('mobile1');
// 	var copy_door = document.getElementById('door1');
// 	var copy_lane = document.getElementById('lane1');
//   var copy_country = document.getElementById('country1');
//   var copy_city = document.getElementById('city1').value;
//   var copy_pincode = document.getElementById('pincode1').value;

		
// 	if (sameAsBilling.checked) {
// 		if (copy_fullName) copy_fullName.value = fullName;
// 		if (copy_surName) copy_surName.value = surName;
// 		if (copy_mail) copy_mail.value = mail;
// 		if (copy_mobile) copy_mobile.value = mobile;
// 		if (copy_door) copy_door.value = door;
// 		if (copy_lane) copy_lane.value = lane;
//     if (copy_country) copy_country.value = country;
//     if (copy_city) copy_city.value = city;
//     if (copy_pincode) copy_pincode = pincode;
// 	} else {
// 		if (copy_fullName) copy_fullName.value = "";
// 		if (copy_surName) copy_surName.value = "";
//     if (copy_mail) copy_mail.value = "";
//     if (copy_mobile) copy_mobile.value = "";
// 		if (copy_city) copy_city.value = "";
// 		if (copy_door) copy_door.value = "";
// 		if (copy_lane) copy_lane.value = "";	
//     if (copy_country) copy_country.value = "";
//     if (copy_pincode) copy_pincode.value = "";
// 	}
// } 
// $("#checkbox").on("change", function(){
//   if (this.checked) {
//     $("[name='fullname1']").val($("[name='fullname']").val());
//     $("[name='surname1']").val($("[name='surname']").val());
//     $("[name='mail1']").val($("[name='mail']").val());
//     $("[name='mobile1']").val($("[name='mobile']").val());
//     $("[name='city1']").val($("[name='city']").val());
//     $("[name='door1']").val($("[name='door']").val());
//     $("[name='lane1']").val($("[name='lane']").val());
//     $("[name='country1']").val($("[name='country']").val());
//     $("[name='pincode1']").val($("[name='pincode']").val());
//   }
// });