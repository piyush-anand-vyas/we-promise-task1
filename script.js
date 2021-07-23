async function foo(){
    let div = document.querySelector('.giphy');
    try {
        let span = document.querySelector('span');
        let resp1 = await fetch("https://random-word-api.herokuapp.com/word?number=1");
        let data1 = await resp1.json();
        span.innerHTML = data1[0];
        span.style.color = 'rgb(194, 207, 7)';
        let resp2 = await fetch("https://api.giphy.com/v1/gifs/search?api_key=wHHbd5HPFQDYuVv1RYnFYC0YWYjiBc6B&q=" + data1[0] + "&limit=25&offset=0&rating=g&lang=en");
        let data2 = await resp2.json();
        console.log(data1[0]);
        
        
        let obj = document.createElement("object");
        obj.style.borderStyle = 'dotted';
        obj.style.padding = '5%';
        obj.data = data2.data[0].images.original.url;
        div.append(obj);
        console.log(div);
       // div.innerHTML = obj;
        //div.append(obj);
       // document.body.append(obj);
} catch (error) {
    let span = document.querySelector('.error');
    span.innerHTML = "No image found";
}

}

foo();

// https://api.giphy.com/v1/gifs/search?api_key=wHHbd5HPFQDYuVv1RYnFYC0YWYjiBc6B&q=bossed&limit=25&offset=0&rating=g&lang=en
