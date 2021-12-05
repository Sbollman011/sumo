

function openNavBar () {
   let menu =  document.getElementsByClassName('navDrawer')[0];
   if(menu.style.visibility == 'visible'){
    menu.style.visibility = 'hidden'
    console.log(menu.style.visibility);
   }
   else{
    menu.style.visibility = 'visible'
   }

}


function makeGetRequest() {
    let datas;
    fetch('http://localhost:3000/').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
        datas = JSON.stringify(data);
        document.getElementById("response").innerHTML = datas;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    
    }

function clearApi() {
    document.getElementById("response").innerHTML = "Info cleared";
}
