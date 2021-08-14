import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            albumSongs: []
        }
    }

    showAlbumSongs = (id) => {
        this.setState({
            albumSongs: []
        })
        this.props.actSongs.map(song => {
            if (song.album_id === id) {
                this.state.albumSongs.push(song)
            }
            console.log("saasdas", this.state.albumSongs);
            return this.state.albumSongs;
        })

    }

    render() {
        return (
            <>
                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>Artist Albums</Modal.Title>
                    </Modal.Header>
                    {this.props.actAlbums.map(album =>
                        <Modal.Body>
                            <div>{album.albums_name}</div>
                        </Modal.Body>
                    )}
                    <Modal.Footer>
                        <Button onClick={() => { this.props.closeAlbum() }} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </>

        )
    }
}


export default Album;
