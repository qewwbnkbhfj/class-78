name_of_the_student_array=[];

function submit()
{
    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;
    var name_5 = document.getElementById("name_of_the_student_5").value;
    var name_6 = document.getElementById("name_of_the_student_6").value;
    var name_7 = document.getElementById("name_of_the_student_7").value;
    var name_8 = document.getElementById("name_of_the_student_8").value;
    var name_9 = document.getElementById("name_of_the_student_9").value;
    var name_10 = document.getElementById("name_of_the_student_10").value;

    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);
    name_of_the_student_array.push(name_5);
    name_of_the_student_array.push(name_6);
    name_of_the_student_array.push(name_7);
    name_of_the_student_array.push(name_8);
    name_of_the_student_array.push(name_9);
    name_of_the_student_array.push(name_10);

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
}