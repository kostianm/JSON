const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'

const prints = document.querySelector('.res')

const test = async () => {
    const res = await axios.get(url);
    let obj = res.data;

    for (i = 0; i < obj.length; i++) {

        let div_item = obj.map(
            (ob) => `<div class="img"><img src="${ob.url}" alt="${ob.title}"></div>`).join("");
        console.log(i)
        prints.innerHTML = div_item


    }

}

test();




