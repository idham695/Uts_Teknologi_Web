const ProductComponent = {
        data(){
            return{
                products : []
            }
        },
        methods: {
            loadData: function(){
                fetch('https://api.jsonbin.io/b/5ea45f622940c704e1de6d95/1')
                .then(res => res.json()) 
                .then(res => {
                    console.log(res)
                    this.products = res.filter(res => res.id.toString() === this.$route.params.id)
                })
            }
        },
        mounted: function(){
            this.loadData()
        },
        template:  `<div class="container">
                        <div class="product" v-if="products">
                            <div class="col-md-10" v-for="product in products">
                                <div class="card products">
                                <img :src="'img/' + product.image" class="card-img-top image" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p class="card-text">Rp.{{ product.price }}</p>
                                    <p class="card-text"> {{ product.description }}</p>
                                    <router-link class="btn btn-primary" :to="'/pembayaran/' + product.id">Simulasi Pembayaran</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
}

export default ProductComponent;