
// const sectionCenter = document.querySelector('.section-center');
// const btnContainer = document.querySelector('.btn-container');
// window.addEventListener('DOMContentLoaded', function(){
//     menuContent(menu);
//     menuBtns(menu)    
// })
// function menuBtns(menuButtons){
//     const button = menuButtons.reduce((values, item) => {
//         if(!values.includes(item.category)){
//             values.push(item.category)
//         }
//         return values;
//     }, ['all'])
//     const buttonsMap = button.map(function(item){
//             return `<button data-id="${item}" class="filter-btn" type="button">${item}</button>`
//     }).join('');
//     btnContainer.innerHTML = buttonsMap;
//     // creating teh filter functionality
//     const btns = document.querySelectorAll('.filter-btn');
//     btns.forEach(function(btn){
//         btn.addEventListener('click', function(e){
//             const btnId = e.currentTarget.dataset.id;
//             const filteredItems = menu.filter(item => {
//                 if(btnId === item.category){
//                     return item.category
//                 }
//             })
//             if(btnId === 'all'){
//                 menuContent(menu);
//             }else{
//                 menuContent(filteredItems)
//             }
//         })
//     })
    
// }
// function menuContent(menuItem){
//     let displayMenu = menuItem.map(function(item){
//         return ` <article class="menu-item">
//         <img src=${item.img} alt="">
//         <div class="item-info">
//             <header>
//                 <h4>${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">${item.desc}</p>
//         </div>
//     </article>`;            
//     })
//     displayMenu = displayMenu.join('');
//     // console.log(displayMenu)
//     sectionCenter.innerHTML = displayMenu;
// }



// //trying to achieve same thing using the long method

// // const sectionCenter = document.querySelector('.section-center');
// // const btns = document.querySelectorAll('.filter-btn');
// // window.addEventListener('DOMContentLoaded', function(){
// //     let displayItems = menu.map(function(item){
// //         return ` <article class="menu-item">
// //         <img src=${item.img} alt="">
// //         <div class="item-info">
// //             <header>
// //                 <h4>${item.title}</h4>
// //                 <h4 class="price">$${item.price}</h4>
// //             </header>
// //             <p class="item-text">${item.desc}</p>
// //         </div>
// //     </article>`
// //     })
// //     displayItems = displayItems.join('');
// //     sectionCenter.innerHTML = displayItems
// // });
// // // creating the filter functionality
// // btns.forEach(function(btn){
// //     btn.addEventListener('click', function(e){
// //         const curentBtn = e.currentTarget.dataset.id;
// //         const filteredItems = menu.filter(item => {
// //             if(curentBtn === item.category){
// //                 return item.category;
// //             }
// //         })
// //         let mapItem = filteredItems.map(function(item){
// //             return ` <article class="menu-item">
// //             <img src=${item.img} alt="">
// //             <div class="item-info">
// //                 <header>
// //                     <h4>${item.title}</h4>
// //                     <h4 class="price">$${item.price}</h4>
// //                 </header>
// //                 <p class="item-text">${item.desc}</p>
// //             </div>
// //         </article>`
// //         })
// //         mapItem = mapItem.join('');
// //         sectionCenter.innerHTML = mapItem;
// //         if(curentBtn === 'all'){
// //             let displayItems = menu.map(function(item){
// //                 return ` <article class="menu-item">
// //                 <img src=${item.img} alt="">
// //                 <div class="item-info">
// //                     <header>
// //                         <h4>${item.title}</h4>
// //                         <h4 class="price">$${item.price}</h4>
// //                     </header>
// //                     <p class="item-text">${item.desc}</p>
// //                 </div>
// //             </article>`
// //             })
// //             displayItems = displayItems.join('');
// //             sectionCenter.innerHTML = displayItems
// //         }
// //     })
// // })

// // RECREATING ALL THE FUNCTIONALITIES PERSONALLY
// // const sectionCenter = document.querySelector('.section-center');
// // const btnContainer = document.querySelector('.btn-container')
// // window.addEventListener('DOMContentLoaded', function(){
// //     ajaxItem()
// //     // console.log(menu)
// //     menuContent(menu)
// //     menuBtns()
// // })
// // // inserting the buttons into the DOM 
// // function menuBtns(){
// //     ajaxItem()
// //     const buttons = menu.reduce((values, item) => {
// //         if(!values.includes(item.category)){
// //             values.push(item.category)
// //         }
// //         return values
// //     }, ['all'])
// //     const buttonsMap = buttons.map(function(item){
// //             return `<button data-id=${item} class="filter-btn" type="button">${item}</button>`
// //     }).join('');
// //     btnContainer.innerHTML = buttonsMap;
// //     const btns = btnContainer.querySelectorAll('.filter-btn');
// //     btns.forEach(function(btn){
// //         btn.addEventListener('click', function(e){
// //             let data = e.currentTarget.dataset.id;
// //             const filtteredItems = menu.filter(item => {
// //                 if(data === item.category){
// //                     return item;
// //                 }
// //             })
// //             if(data == 'all'){
// //                 menuContent(menu);
// //             }else{
// //                 menuContent(filtteredItems)
// //             }
// //         })
// //     })
// // }
// // function menuContent(menuItems){
// //     ajaxItem()
// //     let displayMenu = menuItems.map(function(item){
// //         return `<article class="menu-item">
// //         <img src=${item.img} alt="">
// //         <div class="item-info">
// //             <header>
// //                 <h4>${item.title}</h4>
// //                 <h4 class="price">$${item.price}</h4>
// //             </header>
// //             <p class="item-text">${item.desc}</p>
// //         </div>
// //     </article>`
// //     })
// //     displayMenu = displayMenu.join('');
// //     sectionCenter.innerHTML = displayMenu;
// // }


// // CREATING THE FUNCATIONLITIES AGAJIN AFTER FETCHING TEHM WITH AJAX
// const sectionCenter = document.querySelector('.section-center')
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'menu.json', true);
//     xhr.onload = function(){
//         if(this.status === 200){
//         var menu = JSON.parse(this.responseText);
//         }
//         
//     } 
//     xhr.send()
    

// trtying to use fetch to get the file
// const sectionCenter = document.querySelector('.section-center')
// const btnContainer = document.querySelector('.btn-container')
// window.addEventListener('DOMContentLoaded', function(){
//     fetch('./menu.json')
//     .then(res => res.json())
//     .then(data => {
//         menuContent(data);
//         menuBtns()
//     });
    
// })
// // // creating the buttons
// function menuBtns(){
//     fetch('./menu.json')
//     .then(res => res.json())
//     .then(data =>{ 
//         const button = data.reduce(function(current, added){
//             if(!current.includes(added.category)){
//                 current.push(added.category)
//             }
//             return current;
//         }, ['all'])
//         const buttonsMap = button.map(function(btn){
//                 return `<button data-id="${btn}" class="filter-btn" type="button">${btn}</button>`
//         }).join('');
//         btnContainer.innerHTML = buttonsMap;
//         const btns = document.querySelectorAll('.filter-btn');
//         btns.forEach(function(btn){
//             btn.addEventListener('click', function(e){
//                 var dataItem = e.currentTarget.dataset.id
//                 const filteredItems = data.filter(item => {
//                     if(dataItem === item.category){
//                         return item;
//                     }
//                 })
//                 if(dataItem == 'all'){
//                     menuContent(data)
//                 }else{
//                     menuContent(filteredItems)
//                 }
//             })
//         })
//     });
// }
// function menuContent(menuItem){
//     const displayItems = menuItem.map(function(item){
//         return `<article class="menu-item">
//         <img src=${item.img} alt="">
//         <div class="item-info">
//             <header>
//                 <h4>${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">${item.desc}p>
//         </div>
//     </article>`
//     }).join('');
//     sectionCenter.innerHTML = displayItems;     
// }


// recreatignt eh functionalities using fetch again
// const sectionCenter = document.querySelector('.section-center');
// const btnContainer = document.querySelector('.btn-container')
// window.addEventListener('DOMContentLoaded', function(){
//     fetch('./menu.json')
//     .then(res => res.json())
//     .then(data => {
//         menuContent(data)
//         menuBtns(data)
//     })
// })
// // creating the button functionality
// function menuBtns(menudata){
//     const reducedItem = menudata.reduce(function(values, item){
//         if(!values.includes(item.category)){
//             values.push(item.category)
//         }
//         return values;
//     }, ['all'])
//     const mapBtns = reducedItem.map(function(item){
//         return `<button data-id="${item}" class="filter-btn" type="button">${item}</button>`
//     }).join('')
//     btnContainer.innerHTML = mapBtns;
//     const btns = document.querySelectorAll('.filter-btn');
//     btns.forEach(function(btn){
//         btn.addEventListener('click', function(e){
//             var identifier = e.currentTarget.dataset.id;
//             const filteredItems = menudata.filter(function(item){
//                 if(identifier === item.category){
//                     return item;
//                 }
//             })
//             if(identifier === 'all'){
//                menuContent(menudata) 
//             }else{
//                 menuContent(filteredItems)
//             }
//         })
//     })
// }
// function menuContent(menu){
//     const mapItem = menu.map(function(item){
//         return  `<article class="menu-item">
//         <img src=${item.img} alt="">
//         <div class="item-info">
//             <header>
//                 <h4>${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">${item.desc}</p>
//         </div>
//     </article>`
//     }).join('');
//     sectionCenter.innerHTML = mapItem;
// }


// const sectionCenter = document.querySelector('.section-center');
// const btnContainer = document.querySelector('.btn-container')
// window.addEventListener('DOMContentLoaded', function(){
//     fetch('./menu.json')
//     .then(res => res.json())
//     .then(data => {
//         menuContent(data)
//         menuBtns(data)
//     })
// })
// function menuBtns(menu){
//     const reducedItem = menu.reduce((values, item) => {
//         if(!values.includes(item.category)){
//             values.push(item.category)
//         }
//         return values;
//     }, ['all'])
//     const mappedItem = reducedItem.map(item => {
//         return `<button data-id= "${item}" class="filter-btn" type="button">${item}</button>`
//     }).join('')
//     btnContainer.innerHTML = mappedItem;
//     const btns = document.querySelectorAll('.filter-btn');
//     btns.forEach(function(btn){
//         btn.addEventListener('click', function(e){
//             let identifier = e.currentTarget.dataset.id;
//             const filter = menu.filter(item => {
//                 if(identifier === item.category){
//                     return item;
//                 }
//             })
//             if(identifier == 'all'){
//                 menuContent(menu);
//             }else{
//                 menuContent(filter);
//             }
//         })
//     })
// }
// function menuContent(menuItem){
//     const mapContent = menuItem.map(function(item){
//         return `<article class="menu-item">
//         <img src=${item.img} alt="">
//         <div class="item-info">
//             <header>
//                 <h4>${item.title}</h4>
//                 <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">${item.desc}</p>
//         </div>
//     </article>`
//     }).join('')
//     sectionCenter.innerHTML = mapContent;
// }


// trying to fetch the files using primitive ajax
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
window.addEventListener('DOMContentLoaded', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './menu.json', true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText)
            menuContent(data)
            menuBtn(data);
        }
    }
    xhr.send();       
})
// function textFile(){
//     fetch('./text.txt')
//     .then(res => res.text())
//     .then(data => data)
// }
function menuBtn(menu){
    const reduce = menu.reduce((values, item) => {
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ['all'])
    const mappedItem = reduce.map(function(item){
        return `<button data-id="${item}" class="filter-btn" type="button">${item}</button>`
    }).join('');
    btnContainer.innerHTML = mappedItem;
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(e){
            const identifier = e.currentTarget.dataset.id;
            const filter = menu.filter(item => {
                if(identifier == item.category){
                    return item;
                }
            })
            if(identifier === 'all'){
                menuContent(menu);
            }else{
                menuContent(filter)
            }
        })
    })
} 
function menuContent(menuItem){
    const menu = menuItem.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt="">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    }).join('');
    sectionCenter.innerHTML = menu;
}