let movies = [
    {
        name: "Master",
        src: "https://th.bing.com/th/id/OIP.d5o3l3_2V9GuGv-f9ygsTQHaJ4?pid=ImgDet&rs=1",
        rating: 8
    },

    {
        name: "Leo",
        src: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2023%2F02%2F06%2Ffile7orv16rel9crf8bsho1-1188395-1675681687.jpg?auto=format%2Ccompress&fmt=webp&fit=max&w=1200",
        rating: 8
    },

    {
        name: "Vikram",
        src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/6241/1296241-v-757c5ceacbfa",
        rating: 8
    },

    {
        name: "Kaithi",
        src: "https://m.media-amazon.com/images/M/MV5BZTVlNGY2YTEtNTlmYy00NzY0LWE1NWUtOGJiNTgxZGM4ZmMzXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UX1000_.jpg",
        rating: 8
    }
]

function handleSearch(){

    let inputValue = document.querySelector('input').value
    console.log(inputValue);

    if(!inputValue==""){
        let result = movies.filter((movie)=>{
           return (
            movie.name.toUpperCase().includes(inputValue.toUpperCase())
            )
        })
       
        displayMovies(result)
}

else{
    displayMovies(movies)
}
}

function displayMovies(data){
    document.querySelector('.movies').innerHTML = ""
        let displayContent=""
    for (let index = 0; index < data.length; index++) {
       
        displayContent=displayContent+`
        <div class="box">
            <div class="inner-box">
                <div class="inner-box1"></div>
                <div class="inner-box2">
                    <h3>${data[index].name}</h3>
                    <p>Rating:${data[index].rating}</p>
                </div>
            </div>
            <img src=${data[index].src} class="img">
        </div>
        `
    }

    document.querySelector('.movies').innerHTML=displayContent
}
displayMovies(movies)







// function handleSearch() {

//     let input = document.querySelector('input').value

//     // console.log(input);

//     if (!input == "") {
//         let mName = movies.filter((names) => {
//             return names.name.toUpperCase().includes(input.toUpperCase())
//         })
//
//         movieSection(mName)
//     } else {
//         movieSection(movies)
//     }

// }

// function movieSection(data) {
//     document.querySelector('.movies').innerHTML = ""
//     let element = ""
//     for (let index = 0; index < data.length; index++) {
//         element = element + `
        
//     <div class="box">
//         <div class="inner-box">
//             <div class="inner-box1"></div>
//             <div class="inner-box2">
//                 <h3>${data[index].name}</h3>
//                 <p>Rating:${data[index].rating}</p>
//             </div>
//         </div>
//         <img src=${data[index].src} class="img">
//     </div>
//         `

//     }
//     document.querySelector('.movies').innerHTML = element
// }

// movieSection(movies)
