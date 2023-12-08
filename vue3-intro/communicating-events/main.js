const app = Vue.createApp({
   data() {
      return {
         cart: [],
         premium: true
      }
   },
   methods: {
      updateCart(id, adding) {
         if(adding)
            this.cart.push(id)
         else {
            let index = this.cart.indexOf(id)
            if(index > -1)
               this.cart.splice(index, 1)
            else
               alert("you cant remove an item that isnt in your cart.")
         }
      }
   }
})