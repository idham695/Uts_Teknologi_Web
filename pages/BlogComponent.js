const BlogComponent = {
    data(){
    return{
        blogs : []
    }
},
methods: {
    loadData: function(){
        fetch('https://api.jsonbin.io/b/5ea469c098b3d53752345ea4/14')
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
template:  `<div class="product" v-if="products">
                <div class="col-md-6" v-for="blog in blogs">
                    <div class="card products">
                        <div class="card-body">
                        <img :src="'img/' + blog.image" class="card-img-top image" alt="...">
                        <h5 class="card-title">{{ blog.title }}</h5>
                        <p class="card-text"> {{ blog.description }}</p>
                        </div>
                    </div>
                </div>
            </div>`}



export default BlogComponent