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
<div class="infos">
    <div class="image">
        <img class="image" src="${item.image}"  alt="" >
    </div>
    <div class="info">
        <div>
            <p class="name">
                ${item.name}
            </p>
            <p class="function">
                ${item.status}
            </p>
        </div>
        <div class="stats">
                <p class="flex flex-col">
                    ${item.species}
                </p>
                
        </div>
    </div>
</div>
<p class="request" >
        ${item.origin.name}
    </p>
</div>

`
divRes.appendChild(divItem);
    });
}
apiRick(1)
