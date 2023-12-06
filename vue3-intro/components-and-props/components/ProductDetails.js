app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template: 
        '<div> {{ details }} </div>'
})