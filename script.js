$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


$(".saveBtn").on("click", function(){
    console.log("works")

    var objectives = $(this).siblings(".description").val()
    var obj = $(this).parent().attr("id")
    localStorage.setItem(obj, objectives)
    console.log(objectives, obj)

})

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))


function hourCheck(){
   var hour = moment().hour()
    $(".time-block").each(function(){
        var differentHour = parseInt($(this).attr("id"))
        console.log(hour, differentHour)
        if (hour === differentHour){
            $(this).addClass("present")
        }
        else if (hour > differentHour){
            $(this).addClass("past")

        }

        else{
            $(this).addClass("future")
        }


        
    })
   
}
hourCheck()





































})