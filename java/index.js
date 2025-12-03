
// var username ="Anas"
// var age = 27
// var id 
// var work =null

// var info ={city:'irbid',phone:962}
// var mark=[20,40,60]


// console.log( username)
// console.log( age)
// console.log( id)
// console.log( info)
// console.log( work)
// console.log(mark[1])

// let Lname ="Barakat"
// Lname="M.Barakat"
// console.log(Lname)

// const x=10
   
// console.log(x)

// var nav=document.getElementById('navigatbar')
// nav.style.backgroundColor='red'
// nav.style.borderRadius='50px'

// var imge=document.getElementsByClassName('imgGrid')[0]
// console.log(imge)
// imge.src="https://minimoon-store.com/wp-content/uploads/2022/08/Untitled-6.jpg"

// var r=0
// if(r==9){
//     console.log('r is equal 9')
// }
// else{
//     console.log('r not equal 9')
// }

// switch (r) {
//     case 9:
//          console.log('r is equal 9')
//         break;
//     case 10:
//          console.log('r is equal 10')
//         break;
//     default:
         
//          console.log('r is nut defined')
//         break;
//         break;
// }

var body =document.getElementById('tbody') /* بدنا نستدعي البودي بال id */
var Button = document.getElementById('btn')

function changetheme(){
    if (body.style.backgroundColor=='white'){
        body.style.backgroundColor = 'black' /*بتغير لون الخلفية للبودي */
        Button.innerText ='change to white' /* عشان نعدل الكلام بداخل الزر */
        
    }
    else{
        body.style.backgroundColor='white'
         Button.innerText ='change to black'
    }
}

localStorage.setItem('Name','Anas')

