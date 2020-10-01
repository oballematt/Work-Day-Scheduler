$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


$(".saveBtn").on("click", function(){
    console.log("works")

    var objectives = $(this).siblings(".description").val()
    var obj = $(this).parent().attr("id")
    localStorage.setItem(obj, objectives)
    console.log(objectives, obj)

})

$("#obj1 .description").val(localStorage.getItem("obj1"))
$("#obj2 .description").val(localStorage.getItem("obj2"))
$("#obj3 .description").val(localStorage.getItem("obj3"))
$("#obj4 .description").val(localStorage.getItem("obj4"))
$("#obj5 .description").val(localStorage.getItem("obj5"))
$("#obj6 .description").val(localStorage.getItem("obj6"))
$("#obj7 .description").val(localStorage.getItem("obj7"))
$("#obj8 .description").val(localStorage.getItem("obj8"))
$("#obj9 .description").val(localStorage.getItem("obj9"))


function hourCheck(){
   var hour = moment().hour()

}






































})