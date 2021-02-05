var app = new Vue({
    el:'#app',
    data:{
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        cart: 0,
        onSale: true,
        variants:[
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage:'./asset/vmSocks-green-onWhite.jpg',
              variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage:'./asset/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0   
            }
            
        ]
    },
    methods:{
        addToCart() {
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
        }
    },
    computed:{
        title() {
            return this.brand + ' ' + this.product  
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
              return this.brand + ' ' + this.product + ' are on sale!'
            } 
              return  this.brand + ' ' + this.product + ' are not on sale'
          }
    }
})