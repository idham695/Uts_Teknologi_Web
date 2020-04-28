const PembayaranComponent = { 
                    data(){
                    return{
                        products : [],
                        nama: '',
                        harga: '',
                        jumlah: 0,
                        total: '',
                        errors: []
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
                    },
                    hasil(){
                        this.total = parseInt(this.harga) * parseInt(this.jumlah)
                    },
                    submitForm(event){
                        this.errors = []
                        // Validasi
                        if(this.nama.length < 3){
                            this.errors.push("Nama minimal 3 karakter")
                            this.$refs.nama.select()                
                        }
                        if(this.harga < 0){
                            this.errors.push("harga tidak boleh minus")
                            this.$refs.harga.select()                
                        }
                        if(this.jumlah < 0){
                            this.errors.push("Jumlah tidak boleh minus")
                            this.$refs.jumlah.select()                
                        }
                        if(this.total < 0){
                            this.errors.push("Total tidak boleh minus")
                            this.$refs.total.select()                
                        }
                        if(this.errors.length === 0){
        
                            // persiapkan data yang akan dikirim
                            let formData = new FormData()
                            formData.append('nama', this.nama)
                            formData.append('harga', this.harga)
                            formData.append('jumlah', this.jumlah)
                            formData.append('total', this.total)
                            // kirim data ke server
                            let xhttp = new XMLHttpRequest()
                            xhttp.onreadystatechange = function(){
                                if(this.readyState == 4 && this.status == 200){
                                    console.log(this.responseText)
                                }
                            }
                            xhttp.open("POST", "http://localhost/proses.php", true)
        
        
                            xhttp.send(formData)
                        }
                    },
                },
                mounted: function(){
                    this.loadData()
                },
                template:  `<div class="container">
                                <div class="product" v-if="products">
                                    <h1 class="header">Form Simulasi Pembayaran</h1>
                                    <div class="row">
                                        <div class="col-md-6" v-for="product in products">
                                            <img :src="'img/' + product.image" class="image-payment" alt="...">
                                        </div>
                                        <div class="col-md-6" v-for="product in products">
                                            <form action="" ref="formProduct" @submit.prevent="submitForm($event)" method="POST" id="myForm">
                                            <p v-if="errors.length">
                                                <div class="alert alert-danger mt-1" v-for="error in errors">
                                                    {{error}}
                                                </div>
                                            </p>
                                                <div v-for="product in products">
                                                    <div class="form-group">
                                                        <label>Nama Produk</label>
                                                        <select class="form-control" v-model="nama">
                                                        <option v-for="product in products" :value="product.name">{{product.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Harga Produk</label>
                                                        <select class="form-control"  v-model="harga">
                                                        <option v-for="product in products" :value="product.price">{{product.price}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Jumlah produk yang ingin di beli</label>
                                                        <input type="number" class="form-control" v-model.number="jumlah" placeholder="masukan jumlah barang yang ingin di beli">
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Total Bayar</label>
                                                        <input type="number" class="form-control" v-model.number="total" readonly>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary" type="submit" v-on:click="hasil()">Bayar</button>
                                            </form> 
                                        </div>
                                    </div>
                                </div>
                            </div>`,}
                    

export default PembayaranComponent