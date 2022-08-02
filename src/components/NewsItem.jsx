import React from 'react'

export default function NewsItem(props) {
 
    var desc = props.desc || "";
    var desc1 = (desc).split("<ol>").join("")
    var desc2 = desc1.split("<li>").join("")
    var desc3 = desc2.split("</li>").join("")

    var time = props.time || "today";
    var t1 = time.split("T").join(" at ")
    var t2 = t1.split("Z").join("")

    var title = "";
    if (props.title.length > 120){
        title = (props.title).slice(0, 110) + "..."
    }else{
        title = (props.title)
    }

    return (
      
        <div className="col">
        <span className="n-auth">{props.source}</span>
          <div className="card shadow-sm">
            <img className="rounded n-img" src={props.imgURL} alt="news" />
            <div className="card-body">
              <p className="n-title card-text">{title}</p>
              <p className="n-desc card-text">{desc3}</p>
              <div className="d-flex justify-content-between align-items-center">               
              <a href={props.oc} class="btn btn-secondary btn-sm active mx-2" role="button" aria-pressed="true">View original article</a>                
                <small className="text-muted">on {t2}</small>
              </div>
            </div>
          </div>
        </div>  
    
    )

}