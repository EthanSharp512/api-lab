const resBtn = document.querySelector('button');

function logBtn() {
    console.log("button clicked")
    axios.get("https://swapi.dev/api/planets/2/")
    .then((res) => {
        let residents = res.data;
        for (let i = 0; i < residents.length; i++) {
            
        }
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

resBtn.addEventListener("click", logBtn);