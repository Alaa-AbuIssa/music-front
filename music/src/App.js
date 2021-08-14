import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Album from './component/Album'
import Song from './component/Song'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      albums: [],
      songs: [],
      actAlbums: [],
      actSongs: [],
      showAlbums: false,
      showSongs: false,

    }
  }

  closeAlbum = () => {
    this.setState({
      showAlbums: false
    })
  }

  closeSong = () => {
    this.setState({
      showSongs: false
    })
  }

  componentDidMount() {
    this.api()
  }

  async api() {
    let artistUrl = "artist/";
    const artist = await axios.get(artistUrl)

    let albumUrl = "album/";
    const album = await axios.get(albumUrl)


    let songUrl = "song/";
    const song = await axios.get(songUrl)

    this.setState({
      songs: song.data,
      artists: artist.data,
      albums: album.data
    })
  }


  showAlbum(id) {
    let albums = [];
    albums = this.state.albums.filter(album => {
      return album.artist_id === id
    })
    this.setState({
      actAlbums: albums,
      showAlbums: true
    })
    console.log(albums)
  }


  showSong(id) {
    let songs = [];

    songs = this.state.songs.filter(song => {
      return song.album_id.artist_id === id
    })
    this.setState({
      actSongs: songs,
      showSongs: true
    })
    console.log(songs)
  }

  render() {
    const artists = this.state.artists;
    console.log('data', this.state)
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {artists.map(artist =>

            <Col>
              <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Img style={{ width: '18rem', height: '18rem' }} variant="top" src={artist.artist_image_URL} />
                <Card.Body>
                  <Card.Title>{artist.artist_name}</Card.Title>
                  <Card.Text>
                    Age : {artist.artist_age}
                  </Card.Text>
                  <Card.Text>
                    Nationality : {artist.artist_nationality}
                  </Card.Text>
                </Card.Body>
                <Button onClick={() => { this.showAlbum(artist.id) }} variant="primary">Show Albums</Button>{' '}
                <Button onClick={() => { this.showSong(artist.id) }} variant="danger">Show Songs</Button>{' '}
              </Card>
            </Col>
          )}
        </Row>
        {this.state.showAlbums && <Album actAlbums={this.state.actAlbums} actSongs={this.state.songs} closeAlbum={this.closeAlbum} />}
        {this.state.showSongs && <Song actSongs={this.state.actSongs} closeSong={this.closeSong} />}

      </>
    )
  }
}

export default App;













