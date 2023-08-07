import { Component } from "react";
import Header from "../Header/header";
import PostList from "../Main/PostList";
// import Info from "../Info/PostlistItem";
// import Footer from "../Footer/Footer";

class App extends Component{
  render(){
    return(
      <>
         <Header />
         {/* <Main /> */}
         <main>
           <PostList />
         </main>
      </>
    )
  }
}


export default App