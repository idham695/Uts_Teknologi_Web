const ProductsComponent = {
                data(){
                    return{
                        keyword: '',
                        products : []
                    }
                },
                methods: {
                    loadData: function(){
                        fetch('https://api.jsonbin.io/b/5ea45f622940c704e1de6d95/1')
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
                computed: {
                    filterProducts(){
                        return this.products.filter((product) => {
                            return product.name.toLowerCase().includes(this.keyword.toLowerCase())
                        })
                    }
                },
                template:  `<div class="container">
                                <div class="product">
                                    <input type="text" class="form-control input" v-model="keyword" placeholder="Masukan kata kunci">
                                    <div class="row">
                                        <div class="col-md-4" v-for="(product, index) of filterProducts" :key="index">
                                            <div class="card products">
                                            <img :src="'img/' + product.image" class="card-img-top collection" alt="...">
                                                <div class="card-body">
                                                <h5 class="card-title">{{ product.name }}</h5>
                                                <p class="card-text">Rp.{{ product.price }}</p>
                                                <router-link class="btn btn-primary" :to="'/products/'+product.id">Detail {{ product.name }}</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`,
}

export default ProductsComponent;