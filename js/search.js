const SearchList = [ 
    "Events Near You",
    "Trending eventes",
    "Music Concert"
]

const resultBox = document.querySelector(
    ".results"
);

const inputBox = document.querySelector(
    ".search-bar"
);

const displayResults = function (result){
    const resultHTML = result.map(function (busqueda){
        return `<li onclick=selectInput(this)> 
            ${busqueda} 
        </li> `;
    });

    resultBox.innerHTML ='<ul>' + 
        resultHTML.join("") + 
    '</ul>';
}

InputBox.onkeyup = function(e){
    let result = [ ];

    const input = InputBox.value.toLowerCase();

    if (input.length === 0){
        resultBox.innerHTML="";
    }

    if(input.length){
        result =SearchList.filter((busqueda)=> {
            return busqueda.toLowerCase().includes(input);
        });
        displayResults(result);
    }
};

function selectInput(busqueda){
    InputBox.value = busqueda.innerText;
    resultBox.innerHTML="";
}