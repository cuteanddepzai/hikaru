var imgComics = [
    {
        img : "./img/44941112-bfac-4419-9dbb-eae59107e631_d1b4a2e27ac34cf89c053ab6a5b19c4d_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/cover_hori_5_5547c7e9897247318ae7cef73f0c1d72_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/deathnoteshortstories_bia_1_73d9d87ff05d4f6d9b16105a74dbbeb1_large.jpg" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/qua_tang_black_jack_95a2d652b07b443ba81a9b3ad8b4d20c_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/qua_tang_black_jack_95a2d652b07b443ba81a9b3ad8b4d20c_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/nxbtre_full_13222022_022219_0a83913a220f4a9b81854c6cc0d44d1d_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/xuong_phep_thuat_1_-_bia1_cc5fa932fb0a4ded847af00a0b2d50cf_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    },
    {
        img : "./img/xuong_phep_thuat_1_-_bia1_cc5fa932fb0a4ded847af00a0b2d50cf_large.webp" ,
        name : "[[Combo 0123] ] Chú Thuật Hồi Chiến: Tập 0+1+2+3",
        price : 500000 ,
        promotion : 570000
    }
]
var showComic = document.querySelector('.row-col-content') 
var htmls = imgComics.map(function(imgComic)
{
    return `<div class ="col l-4 m-4 c-6">
        <div class="each-Comic">
            <div class="set-content">
                <img src = ${imgComic.img} alt ="">
                <h4>${imgComic.name}</h4>
                <p> <span>${imgComic.price}</span> <del>${imgComic.promotion} </del> </p>
            </div>
            <a href="">THÊM VÀO GIỎ</a>
        </div>
    </div>`
})
showComic.innerHTML = htmls.join("")