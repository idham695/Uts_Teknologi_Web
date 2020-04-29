const BrandsComponent = {
    data(){
    return{
        keyword: '',
        brands : []
    }
},
methods: {
    loadData: function(){
        fetch('https://api.jsonbin.io/b/5ea6b7b72940c704e1df68a6')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.brands = res
        })
    }
},
mounted: function(){
    this.loadData()
},
template:  `<div class="container">
                <div class="product">
                    <div class="row">
                        <div class="col-lg-6" v-for="brand in brands" >
                            <div class="card brands">
                            <img :src="'img/' + brand.image" class="card-img-top collection" alt="...">              
                                <div class="card-body">           
                                <h5 class="card-title">{{ brand.name }}</h5>
                                <router-link class="btn btn-primary" :to="'/brands/'+brand.id">Info</router-link>                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,}



export default BrandsComponent;