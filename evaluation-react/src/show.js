import { useState } from "react";
import Favorite from "./favbutton";

export default  function Show(props) {

    const {show} = props;

    return (

       <div class="container"> 
            <div class="row">
                <div class="col">
                    <img class="mb-5" src={show.images.banner}/>
                    <h1 class="mb-2">{show.title}</h1>
                    <h3 class="mb-3">{show.creation}, {show.seasons} seasons</h3>
                    <p class="mt-5">{show.description}</p>
                    <Favorite favState={show.user.favorited} showId={show.id}></Favorite>
                </div>
            </div>
        </div>
    
    )

}