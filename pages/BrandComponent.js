const BrandComponent = {   
    data(){
    return{
        brands : []
    }
},
methods: {
    loadData: function(){
        fetch('https://api.jsonbin.io/b/5ea6b7b72940c704e1df68a6')
        .then(res => res.json()) 
        .then(res => {
            console.log(res)
            this.brands = res.filter(res => res.id.toString() === this.$route.params.id)
        })
    }
},
mounted: function(){
    this.loadData()
},
template:  `<div class="product" v-if="brands">
                <div class="col-md-8" v-for="brand in brands">
                    <div class="card products">
                    <img :src="'img/' + brand.image" class="card-img-top image" alt="...">
                        <div class="card-body">     
                        <p class="card-text"> {{ brand.type }}</p>              
                        <p class="card-text"> {{ brand.description }}</p>
                        </div>
                    </div>
                </div>
            </div>`}



export default BrandComponent