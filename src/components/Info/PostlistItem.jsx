import { Component } from "react";



class PostlistItem extends Component{
    render(){
        // const postlistItems = postData.map((item,id)=>{
        //     const {imageSrc,title,describtion} =  item
        //     return <PostlistItem title ={title} imageSrc={imageSrc} describtion={describtion}/>
        // })
        const {imageSrc,title,describtion} = this.props
        return(
          
            <div className="card_item">
                <img src={imageSrc} alt="" />
                <h2>{title}</h2>
                <span>{describtion}</span>
              </div>
        )
    }
}

export default PostlistItem