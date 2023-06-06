let arr = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Jane',
        age: 21
    },
    {
        name: 'Mary',
        age: 22
    },
    {
        name: 'Mike',
        age: 23
    }
];
let show = document.getElementById('show');

function cardCreater(i) {
    let card = `
    <div class="card" style="width: 18rem;">
        <img src="https://th.bing.com/th?id=ORMS.c7cdd42818462ae7a6dc63c36ca34ce2&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${i.name}</h5>
            <p class="card-text">${i.age}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
    let temp = new DOMParser().parseFromString(card, "text/xml");
    console.log(temp);
    show.append(temp);
    return temp;
}

let cards = arr.map(cardCreater);
console.log(cards);

