import { Component } from "react";

import PostlistItem from "../Info/PostlistItem";
import image from '../Img/Do-Graphic.jpeg'
import image2 from '../Img/Project-X-100.avif'
import image3 from '../Img/photo-160.jpg'
import image4 from '../Img/istockphoto.webp'
import image5 from '../Img/premium_photo-1675793715030-0584c8ec4a13.jpg'
import image6 from '../Img/alamy.jpg'


const postData = [
    {
        title:'FrontEnd',
        image:image,
        describtion: 'Hello world'
    },
    {
        title:'BackEnd',
        image:image2,
        describtion: 'Bye world'
    },
    {
        title:'Javascript',
        image:image3,
        describtion: 'World wide web'
    },
    {
        title:'Hpyer text',
        image:image4,
        describtion: 'HTML'
    },
    {
        title:'SCSS',
        image:image5,
        describtion: 'Style elements'
    },
    {
        title:'Developer',
        image:image6,
        describtion: 'Software engineer'
    }

]

class PostList extends Component{
    render(){

        const postlistItems = postData.map((item,id)=>{
            const {image,title,describtion} =  item
            return <PostlistItem title ={title} imageSrc={image} describtion={describtion}/>
        })

        return(
            <div className="cards container">
              {postlistItems}
          </div>
        )
    }
}

export default PostList