 const clock = document.getElementById('clock') // or //
// document.querySelector('#clock')



// SetInterval  :- will give us constant updated time , as we can set interval //

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString(); // for displayinh in clock //

},1000)