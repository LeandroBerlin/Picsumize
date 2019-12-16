import React, { Component } from 'react'

import Image from './Image'

export default class Picsum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://picsum.photos/list',
            fetch: false
        }
        console.log("CONSTRUCTOR")
    }

    componentDidMount() {
        console.log(
            "COMPONENT DID MOUNT"
        )
        this.fetchAsync()
    }

    componentDidUpdate() {
        console.log(
            "COMPONENT UPDATED"
        )
    }

    fetchAsync = async () => {

        console.log("NOW FETCH DATA")
        try {

            const req = await fetch(this.state.url)

            const res = await req.json()

            //console.log(res)

            const random = Math.floor(
                Math.random() * Object.keys(res).length
            )

            console.log(
                "STATE CHANGED"
            )
            this.setState({
                fetch: true,
                source: res[random]
            })

        }
        catch (error) {
            console.error(error)
        }

    }

    handleSubmit = (event) => {
        // method to handle submit events
        event.preventDefault();
        console.log("You clicked!")
        this.fetchAsync()
    }

    render() {
        console.log("RENDER PICSUM")
        return (
            <div>

                {this.state.fetch &&

                    < Image source={this.state.source} />
                }
                <form onSubmit={this.handleSubmit}>
                    <button>
                        Random Picture
                   </button>
                </form>
            </div>
        )
    }
}
