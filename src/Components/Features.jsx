import { useContext, useState } from "react";
import Card from "./Card";
import { PostList } from "../Store/App-Store";

const Features = () => {
    const { reducerPostList, GET_INITIAL_POST } = useContext(PostList);
    const [datafetch, setdatafetch] = useState(false);

    if (!datafetch) {
        

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                GET_INITIAL_POST(data.products)
            });
        setdatafetch(true);

    }
    return (
        <>
            {/* <button className="btn btn-warning" onClick={handleOnClick}>Load-data</button> */}
            {
                reducerPostList.map((post) => (
                    <Card key={post.id} post={post}></Card>
                ))
            }

        </>
    );
}
export default Features;