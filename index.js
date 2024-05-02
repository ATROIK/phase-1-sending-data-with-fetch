// Add your code here

function submitData (name, email) {
    let form = {       //object that that passed to submitData func
        name: name,
        email: email
    };

    let configObj = {      // configuration object, used as argument for fetch func. Post request should be made with json data. body uses stringify on form object as required
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(form)
    };

    return fetch("http://localhost:3000/users", configObj) // fetch request, with configObj 
        .then(function(response) {    // then, callback (respone.json) to parse response as json, returns promise
            return response.json();
        })

        .then(function(object) {    // handles response data from last then. craetes new element so we can append returned id
            let h3 = document.createElement('h3');
            h3.innerHTML = object.id;
            document.body.appendChild(h3);
            console.log(object);
        })
        .catch(function(error) {    //  handles errors
            let h4 = document.createElement('h4');
            h4.innerHTML = error.message;
            document.body.appendChild(h4);
            console.log(error.message);
        });
    }

    submitData();