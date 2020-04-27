const BlogsComponent = { 
    data(){
    return{
        keyword: '',
        blogs : []
    }
},
methods: {
    loadData: function(){
        fetch('https://api.jsonbin.io/b/5ea469c098b3d53752345ea4/15')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.blogs = res
        })
    }
},
mounted: function(){
    this.loadData()
},
template:  `<div class="product">
                <div class="row">
                    <div class="col-lg-8" v-for="blog in blogs" >
                        <div class="card blogs">
                        <img :src="'img/' + blog.image" class="card-img-top image" alt="...">              
                            <div class="card-body">           
                            <h5 class="card-title">{{ blog.title }}</h5>
                            <p class="card-title">{{ blog.description }}</p>
                            <router-link class="btn btn-primary" :to="'/blogs/'+blog.id">Baca selengkapnya</router-link>                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,}



export default BlogsComponent