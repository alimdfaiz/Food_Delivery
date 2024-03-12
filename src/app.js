// const heading = React.createElement("h1",{
//     id:"heading",xyz:"abc"
// },
// "Hello World from React");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);


//         <div id="parent">
//             <div id="child">
// <h1>I am a h1 tag</h1>
//             </div>

//         </div>



// const parent = React.createElement("div",{
//     id:"parent"
// }, [React.createElement("div",{
//     id:"child1"
// },[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),React.createElement("h3",{},"I am h3 tag"),]),
// React.createElement("div",{
//     id:"child2"
// },[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),React.createElement("h3",{},"I am h3 tag"),]),
// React.createElement("div",{
//     id:"child3"
// },[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),React.createElement("h3",{},"I am h3 tag"),]),]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);


// Jsx Form
// const JsxHeading = <h1 id="heading" className="heading1"> Namaste React,This is React Element</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JsxHeading);
// console.log(JsxHeading);

// Funtional Component

// const Heading = ()=>{
//     return<h1>Namaste React,Functional Component</h1>
// }
// const Heading1 = ()=>(
//     <h1>Namaste React,Functional Component</h1>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading/>)

// Component Composition - One component inside other component

// function Title(){
//     return <h1>Namste react 1</h1>
// }
// function HeadingComponent(){
//     return <div>
//         <Title/>
//         <Title></Title>
//         {Title()}
//         <h1>Namste react </h1>
//         </div>
// }
//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)


// Food delivery Web
import React,{lazy,Suspense} from "react";
import  ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Component/Cart";
import { Footer } from "./Component/Footer";









const AppLayout = () =>{


return(
    <Provider store={appStore}>
    <div>
<Header/>
<Outlet/>
<Footer/>
{/* <Body/> */}
    </div>
    </Provider>
)


}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
children:[
    {
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element: <Contact />
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
    },
    {
        path:"/cart",
        element:<Cart/>
    }
],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)