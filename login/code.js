
$all =[
    {
        name: 'admin',
        pass:1234,
    },
    {
        name: 'user',
        pass:12345,
    },
]
var adminame =$all[0]['name'];
var adminpass =$all[0]['pass'];
var username = $all[1]['name'];
var userpass = $all[1]['pass'];
document.getElementById('login').addEventListener('submit', function(e){
    e.preventDefault();
    var inputName = document.querySelector('#name').value;
    var inputPass = document.querySelector('#pass').value;
    if(inputName === adminame && inputPass == adminpass ){
        location.assign('../admin/admin.html');
    }
    else if(inputName === username && inputPass == userpass){
        location.assign('../home/homepage.html');
    }
else{
    alert("there is somthing wrong check your email and password")
}
});
function sora()
      {
        document.body.style.backgroundImage = "url('img.jpg')";
      }