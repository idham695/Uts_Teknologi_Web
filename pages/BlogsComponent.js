const BlogsComponent = { 
    data(){
    return{
        keyword: '',
        blogs : []
    }
},
methods: {
    loadData: function(){
        fetch('https://api.jsonbin.io/b/5ea469c098b3d53752345ea4/14')
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
                    <div class="col-md-4" v-for="blog in blogs" >
                        <div class="card blogs">
                            <div class="card-body">
                            <img :src="'img/' + blog.image" class="card-img-top image" alt="...">                                   
                            <h5 class="card-title">{{ blog.title }}</h5>
                            <p class="card-text">{{ blog.description }}</p>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,}



export default BlogsComponent