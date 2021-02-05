Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            require:true
        }
    },
    template:`
    <div class="product">
            
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{shipping}}</p>
      <p>{{ sale }}</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>


        <div class="color-box"
             v-for="(variant, index) in variants" 
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)"
             >
        </div> 

        <button v-on:click="addToCart" 
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
          >
        Add to cart
        </button>
      </div>  
    
  </div>
    `,
    data(){
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
        }
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
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
          },
        shipping(){
            if (this.premium){
                return "Free"
            }
            return 2.99
        }
    }

})
var app = new Vue({
    el:'#app',
    data:{
        premium:false,
        cart: []
    },
  methods: {
    updateCart(id) {
        this.cart.push(id)
    },
    removeItem(id) {
        for(var i = this.cart.length - 1; i >= 0; i--) {
            if (this.cart[i] === id) {
                this.cart.splice(i, 1);
            }
        }
    }
}
})