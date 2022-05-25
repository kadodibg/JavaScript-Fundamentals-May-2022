function vacantion(peopleCount, groupType, dayOfWeek) {
  //Define price 
  let studentsFridayPrice = 8.45;
  let bussinesFridayPrice = 10.9;
  let regularFridayPrice = 15;
  let studentsSaturdayPrice = 9.8;
  let bussinesSaturdayPrice = 15.6;
  let regularSaturdayPrice = 20;
  let studentsSundayPrice = 10.46;
  let bussinesSundayPrice = 16;
  let regularSundayPrice = 22.5;
  let studentsDiscountProcent = 15;
  let bussinesDiscountCount = 10;
  let regularDiscountProcent = 5;
  let totalPrice = 0;
  //Check for business group 
  if (groupType === "Business" && peopleCount >= 100){
    peopleCount -= bussinesDiscountCount;
  }
  if (groupType === "Students" && dayOfWeek === "Friday") {
    totalPrice += peopleCount * studentsFridayPrice;
  } else if (groupType === "Students" && dayOfWeek === "Saturday") {
    totalPrice += peopleCount * studentsSaturdayPrice;
  } else if (groupType === "Students" && dayOfWeek === "Sunday") {
    totalPrice += peopleCount * studentsSundayPrice;
  } else if (groupType === "Regular" && dayOfWeek === "Friday") {
    totalPrice += peopleCount * regularFridayPrice;
  } else if (groupType === "Regular" && dayOfWeek === "Saturday") {
    totalPrice += peopleCount * regularSaturdayPrice;
  } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
    totalPrice += peopleCount * regularSundayPrice;
  } else if (groupType === "Business" && dayOfWeek === "Friday") {
    totalPrice += peopleCount * bussinesFridayPrice;
  } else if (groupType === "Business" && dayOfWeek === "Saturday") {
    totalPrice += peopleCount * bussinesSaturdayPrice;
  } else if (groupType === "Business" && dayOfWeek === "Sunday") {
    totalPrice += peopleCount * bussinesSundayPrice;
  }
  //Check group type 
  if (groupType === "Students" && peopleCount >= 30) {
    totalPrice -= (studentsDiscountProcent / 100) * totalPrice;
  } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
    totalPrice -= (regularDiscountProcent / 100) * totalPrice;
  }
  //Print result
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacantion(30, "Students", "Sunday");
