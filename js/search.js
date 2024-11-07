const SearchList = [ 
    "Events Near You",
    "Trending eventes",
    "Music Concert"
]

const ResultBox = document.querySelector(
    ".results"
);

const InputBox = document.querySelector(
    ".search-bar"
);

const DisplayResults = function (result){
    const resultHTML = result.map(function (busqueda){
        return `<li onclick=selectInput(this)> 
            ${busqueda} 
        </li> `;
    });

    ResultBox.innerHTML ='<ul>' + 
        ResultBox.join("") + 
    '</ul>';
}

InputBox.onkeyUp = function(e){
    let result = [ ];

    const input = InputBox.ariaValueMax.toLowerCase();

    if (input.length === 0){
        ResultBox.innerHTML="";
    }

    if(input.length){
        result =SearchList.filter((busqueda)=> {
            return busqueda.toLowerCase().includes(input);
        });
        DisplayResults(result);
    }
};

function selectInput(busqueda){
    InputBox.value = busqueda.innerText;
    ResultBox.innerHTML="";
}