// const cat = fetch("https://dog.ceo/api/breeds/image/random").then((res)=>res.json())
// .then((res)=>dogRandom(res))



// function dogRandom(res){
//     const img=document.querySelector('.img')
//     const random=Object.entries(res)[0][1]
//     console.log(random)
   
// let image=`<img src=${random} alt="Dogs">`
// img.innerHTML=image

// }


// const cal = fetch("https://cat-fact.herokuapp.com/facts").then((res)=>res.json())

// .then((res)=>catFacts(res))

// function catFacts(res){
// let cat = Object.values(res)
// const result = cat.map((a)=>a.text)
// // console.log(result);

// let txt = document.querySelector('div')

// for (let index = 0; index < result.length; index++) {
   
// const p = document.createElement('p')
//     txt.appendChild(p)
//     p.innerHTML=result[index]
// }

// }

const ul = document.querySelector('ul')

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(res=> userName(res))

function userName(res){
    const data = Object.values(res)
    // console.log(data);
    const value = data.map((a)=> a.name)

    for (let index = 0; index < value.length; index++) {
        const element = value[index ];
        const list = document.createElement('li')
        ul.appendChild(list)
        list.innerHTML=element
    }
}