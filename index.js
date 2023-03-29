const apiRick=async (pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    data.results.map(item=>{ 
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card">
        <img src="${item.image}" class="card-image">
        <div class="category"> 
        <h2>${item.name}</h2></div>
        <div class="heading"><p><b>Especie: </b>${item.species}</p>
            <div class="author"><span class="name"><b>Estado: </b>${item.status}</span></div>
        </div>
    </div>
`
divRes.appendChild(divItem);
    });
}
apiRick(1)
