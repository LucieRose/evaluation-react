import { useState } from "react";

export default function Favorite(props){

    const {favState , showId} = props
   

    const [favorite, setFavorite] = useState(favState);

    function DisplayStateFav (props){
        if(props.isFav){
            return <span>Favorited</span>
        }
        return <span>Favorite</span>
    }

    function HandleClick(showId){
        fetch(`http://localhost:4000/rest/shows/${showId}`, { method: 'POST' })
            .then(()=> setFavorite(!favorite))
    }

    return (
        <button class="btn btn-danger"
         onClick={() => {
            HandleClick(showId)
         }
         }
         >
            <DisplayStateFav isFav={favorite}/>
        </button>
    )
}