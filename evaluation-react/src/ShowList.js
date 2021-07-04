import React from 'react'

import Show from './show'

export default function ShowList(props) {
    const elements = props.shows.map(show => <Show key={show.id} show={show} />)

    return (
        <div>{elements}</div>
    )
}