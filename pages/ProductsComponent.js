const ProductsComponent = {
                data(){
                    return{
                        products : []
                    }
                },
                methods: {
                    loadData: function(){
                        fetch('https://api.jsonbin.io/b/5ea5501c2940c704e1ded0cc')
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            this.products = res
                        })
                    }
                },
                mounted: function(){
                    this.loadData()
                },
                template:  `<div class="product">
                                <div class="row">
                                    <div class="col-md-4" v-for="product in products">
                                        <div class="card products">
                                            <div class="card-body">
                                            <img :src="'img/' + product.image" class="card-img-top image" alt="...">
                                            <h5 class="card-title">{{ product.name }}</h5>
                                            <p class="card-text"{{ product.price }}</p>
                                            <router-link class="btn btn-primary" :to="'/products/'+product.id">Detail {{ product.name }}</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
}

export default ProductsComponent;