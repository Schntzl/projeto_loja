let modalQt = 1;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//Listagem dos modelos
modeloJson.map((item, index) => {
    let modeloItem = c('.models .modelo-item').cloneNode(true);

    modeloItem.setAttribute('data-key', index);

    modeloItem.querySelector('.modelo-item-img img').src = item.img
    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;
    modeloItem.querySelector('.modelo-item-price').innerHTML = `${item.price.toFixed()}`;

    modeloItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.modelo-item').getAttribute('data-key');
        modalQt = 1;

        c('.modeloBig img').src = modeloJson[key].img;
        c('.modeloInfo h1').innerHTML = modeloJson[key].name;
        c('.modeloInfo .modeloInfo-desc').innerHTML = modeloJson[key].description;
        c('.modeloInfo .modeloInfo-pricearea .modeloInfo-actualPrice').innerHTML = `${modeloJson[key].price.toFixed()}`;
        c('.modeloWindowArea').style.opacity = 0;
        c('.modeloWindowArea').style.display = 'flex';

        setTimeout(() => {
            c('.modeloWindowArea').style.opacity = 1;
        }, 200);
    });

    c('.modelo-area').append(modeloItem);
});

//eventos Modal//
function closeModal(){
    c('.modeloWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.modeloWindowArea').style.display = 'none';
    }, 200)
}

cs('.modeloInfo-cancelButton, .modeloInfo-cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});


