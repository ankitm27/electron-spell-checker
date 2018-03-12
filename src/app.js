function spellCheck(text) {
    text = document.getElementById("text").innerHTML;
    fetch('http://127.0.0.1:3000/api?text=' + JSON.stringify(text)).then(res => res.json())
        .then(json => {
            document.getElementById("demo").innerHTML = json.check;
            console.log(json)
        });
};


