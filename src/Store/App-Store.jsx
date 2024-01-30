import { createContext, useReducer } from "react";

export const PostList=createContext(
    {
        reducerPostList:[],
        addPost:()=>{},
        deletePost:()=>{},
        GET_INITIAL_POST:()=>{}
    }
);

const functionUseReducer=(currentPost,action)=>{
    let newPostList=currentPost;
    if(action.type==="Add_Initial_Posts")
    {
        newPostList=action.payload.posts;
    }
    return newPostList;  
}

const PostListProvider=({children})=>{
    //if  there are complexities in data =, we usually prefer useReducer Instead of useState.
   
    const [reducerPostList,dispatchReducerPostList]=useReducer(functionUseReducer,Default_List);
   
    //useReducer takes twi parameter one Function as a parameter and on default value.

    const addPost=()=>{
//declaring these methods here so that we can pass it through react context. we can pass several methods like that.
    }

    const deletePost=()=>{

    }
    const GET_INITIAL_POST=(posts)=>{
        dispatchReducerPostList
        ({
            type:"Add_Initial_Posts",
            payload:{
                posts
            },
        });
        

    }
   
    return(
        <PostList.Provider  value={{reducerPostList,addPost,deletePost,GET_INITIAL_POST}}>{children}</PostList.Provider>
    )
};
const Default_List=[ {
    "id": 0,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 554,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "...",
    "images": ["...", "...", "..."]
  },
  {
    "id": 1584551,
    "title": "NAN",
    "description": "NAN",
    "price": 125,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "NAN",
    "category": "smartphones",
    "thumbnail": "...",
    "images": ["...", "...", "..."]
  }]
export default PostListProvider;