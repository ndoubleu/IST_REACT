import React from 'react'
import '../assets/index.css'
import { GoTriangleUp } from 'react-icons/go';
class PostsPage extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            filter:[],
        };
        this.onchange = this.onchange.bind(this)
    }
    async componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url, {
            method : 'get',
            headers: new Headers({
                'Content-Type': 'application/json'            
            })
        });
        const data = await response.json();
        if(response.status===200){
            this.setState({data:data});
            this.setState({filter:data});
        }
    }
    onchange(e){
        var value = e.target.value;
        var data = this.state.data;
        var filter = data.filter(post =>{
            post.order = post.title.toLowerCase().search(value.toLowerCase());
            return post.title.toLowerCase().search(value.toLowerCase()) !==-1;
        }).sort((a,b)=>{
            if(a.order>b.order){return 1}
            else{return -1}
        })
        this.setState({filter:filter})
    }
    render(){
        var {filter} = this.state;
        return(
            <div className='block container py-4'>
                <div className='d-flex flex-column mt-4'>
                    <div className='mb-4'>
                        <input className='search p-2' placeholder='Filter by' onChange={(e) =>{this.onchange(e)}}></input>
                    </div>
                    {
                    filter.map(post => (
                        <div className='d-flex flex-column cart' key={post.id}>
                            <div className='d-flex flex-nowrap cart-title justify-content-between'>
                                <span className='text bold mr-4'>{post.title}</span>
                                <span className='text opacity'>{'User:' + post.userId}</span>
                            </div>
                            <div className='cart-body'>
                                <GoTriangleUp className='cart-arrow'/>
                                {post.body}
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
export default PostsPage