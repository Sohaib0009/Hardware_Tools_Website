let itemContainerElement = document.querySelector('.container');
let innerHTML = '';
item.forEach(item =>{
    innerHTML += 
    `<div class="item_container">
        <a href="#"><img src="${item.item_img}" alt=""></a>
        <div class="rating">
            ${item.rating.stars} ★ | ${item.rating.review}
        </div>
        <div class="item_name">${item.item_name}</div>
        <div class="price">
            <span class="current_price">Rs ${item.current_price}</span><br>
            <span class="original_price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount}% off)</span>
        </div>
        <button class="btn_add_bag" onclick="addtoBag">Add to Bag</button>
    </div>`
});
itemContainerElement.innerHTML = innerHTML;


