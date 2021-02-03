'use strict';
var name_arr=[];
var grade_arr=[];
var course_arr=[];
var table= document.getElementById('table')
var action = document.getElementById('action');
action.addEventListener('submit', do1)
function do1(e){
    e.preventDefault();
var grade=Math.floor( Math.random()*100);
var name= document.getElementById('name');
var course= document.getElementById('course');
var new_row=document.createElement('tr')
table.appendChild(new_row)
   var data1=document.createElement('td');
   new_row.appendChild(data1)
   data1.textContent=name.value
   var data2=document.createElement('td');
   new_row.appendChild(data2)
   data2.textContent=grade
   var data3=document.createElement('td');
   new_row.appendChild(data3)
   data3.textContent=course.value
   name_arr.push(name.value)
   grade_arr.push(grade)
   course_arr.push(course.value)
   localStorage.clear()
   localStorage.setItem('name',name_arr)
   localStorage.setItem('grade',grade_arr)
   localStorage.setItem('course',course_arr)

}