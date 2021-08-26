import {
    gql
} from '@apollo/client';

export const LOAD_ARTISTS = gql`
query{
    allArtists{
       artistName
       image
       nationality
           albumSet{
             albumName
             rate
               songSet{
                   songName
                }
       }
    }
 }  
`;