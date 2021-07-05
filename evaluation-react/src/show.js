import { useState } from "react";
import Favorite from "./favbutton";

export default  function Show(props) {

    const {show} = props;

    return (
 
    <section>
        <div className="content">
            <img src={show.images.banner}/>
            <h2>{show.title}</h2>
            <h3>{show.creation}, {show.seasons} seasons</h3>
            <p>{show.description}</p>
            <Favorite favState={show.user.favorited} showId={show.id}></Favorite>
        </div>
    </section>
    )

}