let submit=document.getElementById("submit")
let male=["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"]
let female=["Akosua","Adwoa","Abenaa","Akua", "Yaa","Afua","Ama"]

function checkAkanName(e){
e.preventDefault()
  let year=document.getElementById("year").value
  let month=document.getElementById("month").value
  let date=document.getElementById("date").value
if(year <= 0){
  alert("invalid year")
    return
    }
if(month <= 0 || month >12){
  alert("invalid month")
    return
  }
if(date <= 0 || date >31){
  alert("invalid date")
  return
}
let gender=document.getElementById("gender")
let genderOption=gender.options[gender.selectedIndex].value
if (genderOption =="none"){
  alert("Please select gender")
  return
}
//console.log(genderOption)

let bd=year+"-"+month+"-"+date
let d=new Date(bd)
let dy=d.getDay()

if(genderOption =="male"){
  for(let i=0;i<male.length;i++){
    if(parseInt(dy)==i){
      alert("My Akan Name is; " + male[i])
      return
    }
  }
}else{
  for(let i=0;i<female.length;i++){
    if(parseInt(dy)==i){
      alert("My Akan Name is; " + female[i])
      return
    }
  }
}
//console.log(year, month, date)
}

submit.addEventListener("click", checkAkanName)