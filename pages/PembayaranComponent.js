const PembayaranComponent = { 
                    data(){
                    return{
                        products : [],
                        nama: '',
                        harga: '',
                        jumlah: 0,
                        total: 0,
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
                        if(this.nama.length === 0){
                            this.errors.push("Pilihlah minimal 1 nama")
                            this.$refs.nama.focus()                
                        }
                        if(this.harga.length === 0){
                            this.errors.push("Pilihlah minimal 1 harga")
                            this.$refs.harga.focus()                
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
                                    <form action="" ref="formProduct" @submit.prevent="submitForm($event)" method="POST" id="myForm">
                                    <p v-if="errors.length">
                                        <div class="alert alert-danger mt-1" v-for="error in errors">
                                            {{error}}
                                        </div>
                                    </p>
                                        <div class="row" v-for="product in products">
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                        <div class="form-group">
                                                            <label>Nama</label>
                                                            <select class="form-control"  v-model="nama">
                                                                <option v-for="product in products" :value="product.name">{{product.name}}</option>
                                                            </select>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                        <div class="form-group">
                                                            <label>Harga</label>
                                                            <select class="form-control"  v-model="harga">
                                                                <option v-for="product in products" :value="product.price">{{product.price}}</option>
                                                            </select>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                        <div class="form-group">
                                                            <label>Jumlah Produk</label>
                                                            <input type="number" class="form-control" v-model.number="jumlah" placeholder="masukan jumlah barang yang ingin di beli">
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                        <div class="form-group">
                                                            <label>Total</label>
                                                            <input type="number" class="form-control" v-model.number="total" readonly>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" type="submit" v-on:click="hasil()">Proses Pembayaran</button>
                                    </form>
                                </div>
                            </div>`,}
                    

export default PembayaranComponent