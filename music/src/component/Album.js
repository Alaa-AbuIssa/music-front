import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
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
                            <Button onClick={() => { this.props.closeAlbum()}}  variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>


                </>

            )
        }
    }


    export default Album;
