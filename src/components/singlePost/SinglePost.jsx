import './singlePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Arth</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aliquam
          vel cum natus deleniti aspernatur nam nihil, adipisci animi
          dignissimos quos numquam dolore, optio excepturi ipsa! Recusandae,
          reprehenderit facilis? Id. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. In aliquam vel cum natus deleniti aspernatur nam
          nihil, adipisci animi dignissimos quos numquam dolore, optio excepturi
          ipsa! Recusandae, reprehenderit facilis? Id. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. In aliquam vel cum natus deleniti
          aspernatur nam nihil, adipisci animi dignissimos quos numquam dolore,
          optio excepturi ipsa! Recusandae, reprehenderit facilis? Id. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. In aliquam vel cum
          natus deleniti aspernatur nam nihil, adipisci animi dignissimos quos
          numquam dolore, optio excepturi ipsa! Recusandae, reprehenderit
          facilis? Id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          In aliquam vel cum natus deleniti aspernatur nam nihil, adipisci animi
          dignissimos quos numquam dolore, optio excepturi ipsa! Recusandae,
          reprehenderit facilis? Id.
        </p>
      </div>
    </div>
  )
}
