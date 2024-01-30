const Card = ({post}) => {
    
    return (
        <>
            
                <div className="card-container">
                <div className="card">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <a href="#" className="btn btn-primary">Brand - {post.brand}</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;