const BlogComponent = {
    data(){
    return{
        blogs : []
    }
},
methods: {
    loadData: function(){
        fetch('https://api.jsonbin.io/b/5ea469c098b3d53752345ea4/15')
        .then(res => res.json()) 
        .then(res => {
            console.log(res)
            this.blogs = res.filter(res => res.id.toString() === this.$route.params.id)
        })
    }
},
mounted: function(){
    this.loadData()
},
template:  `<div class="container">
                <div class="product" v-if="blogs">
                    <div class="col-md-8" v-for="blog in blogs">
                        <div class="card products">
                        <img :src="'img/' + blog.image" class="card-img-top image" alt="...">
                            <div class="card-body">                   
                            <h5 class="card-title">{{ blog.title }}</h5>
                            <p class="card-text"> {{ blog.deskripsi }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`}



export default BlogComponent