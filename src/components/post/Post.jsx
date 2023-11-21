import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        voluptatibus sequi asperiores expedita maiores excepturi, dolores culpa
        adipisci iure ab possimus ducimus ipsam labore minus molestiae eum
        incidunt error! Voluptatem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio voluptatibus sequi asperiores expedita maiores
        excepturi, dolores culpa adipisci iure ab possimus ducimus ipsam labore
        minus molestiae eum incidunt error! Voluptatem. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Optio voluptatibus sequi asperiores
        expedita maiores excepturi, dolores culpa adipisci iure ab possimus
        ducimus ipsam labore minus molestiae eum incidunt error! Voluptatem.
      </p>
    </div>
  )
}
