import React from 'react'
import '../assets/index.css'
import { GoTriangleUp } from 'react-icons/go';
class MainPage extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
    }
    async componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
        const response = await fetch(url, {
            method : 'get',
            headers: new Headers({
                'Content-Type': 'application/json'            
            })
        });
        const data = await response.json();
        if(response.status===200){
            this.setState({data:data});
        }
    }
    render(){
        var {data} = this.state;
        return(
            <div className='block container py-4'>
                <div className='d-flex flex-column mt-4'>
                {
                    data.map(comment => (
                        <div className='d-flex flex-column cart' key={comment.id}>
                            <div className='d-flex flex-nowrap cart-title'>
                                <span className='text bold mr-4'>{comment.name}</span>
                                <span className='text opacity'>{comment.email}</span>
                            </div>
                            <div className='cart-body'>
                                <GoTriangleUp className='cart-arrow'/>
                                {comment.body}
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
export default MainPage