import React from 'react';
import axios from 'axios';
class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    handlePosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp =>{ console.log(resp.data)
            this.setState({posts:resp.data})
        })
    }
    render(){
        return(
            <div>
                {this.handlePosts()} 
                {this.state.posts[0].title}
                </div>
        )
    }
}
// function mapStateToProps(state){
//     console.log('state',state);
//     return{
//         posts:state.posts
//     };
// }

// export default connect(mapStateToProps,null)(Posts)
export default Posts;
