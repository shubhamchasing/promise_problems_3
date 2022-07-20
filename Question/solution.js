const fs = require('fs');
const path = require('path');

const readFile = ( file, callback) => {
    fs.readFile(path.join(__dirname,file), 'utf8', callback)
}

const writeFile = (file, data ,callback) => {
    fs.writeFile(path.join(__dirname,file),data,callback)   
}

const appendFile = (file, data, callback) =>{
fs.appendFile(path.join(__dirname, file), data + '\n', callback)
}


const login = (username, type = 0) => {

    return new Promise((resolve,reject) =>{
        if(username && username.length < 9){
            let userId = Math.floor(Math.random()* 10**10)
            resolve({userId, type })
        }
        else{
             throw new Error('username has more than 8 characters');
        }
    })
}

//login('shubhamaaa').then(res => console.log(res)).catch((err) => console.log(err))

const getProductData = (file) => {

    readFile(file,(err,data))
}

const addItemsToCart = (items,obj) =>{

    return new Promise((resolve,reject) =>{

        fs.readFile(path.join(__dirname,'cart.json'), (err,data) => {
            if(err){
                console.error(err)
            }
            else{
                let cartData  = JSON.parse(data)
                const {userId, type} = obj;

                if(!cartData[userId]){
                    cartData[userId] = []
                }

                items.forEach(element => {
                    if(!cartData[userId]){

                    }
                });

        }
        })

        

    })

}

login('shubham').then((res) =>{

    let items;
    let obj = res
    addItemsToCart(items,obj)

})






const getMostExpensive = () =>{}

const extractData = () => {}

const addItemsToCatalog = () => {}