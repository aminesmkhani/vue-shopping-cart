var app = new Vue({
    el:'#app',
    data:{
        altText : 'عکس جوراب',
        product : 'جوراب',
        image: './asset/vmSocks-green-onWhite.jpg',
        inventory:0,
        onSale: false,
        details:["80% Cotton","20% polyester","Gender-neurtal"],
        cart:0,
        variants:[
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage:'./asset/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage:'./asset/vmSocks-blue-onWhite.jpg',
            }
            
        ]
    },
    methods:{
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }
})