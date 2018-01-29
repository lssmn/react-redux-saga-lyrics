import params from '../constants/params';

export const get = ({ artist, title }) => (
  fetch(`${params.api}/v1/${artist}/${title}`)
    .then(response => response.json())
    .then(
      ({ lyrics }) => (
        {
          lyrics,
          artist,
          title,
        }
      )
    )
    .catch(err => { throw err; })
);

export const suggest = query => (
  fetch(`${params.api}/suggest/${query}`)
    .then(response => response.json())
    .then(
      ({ data }) => (
        data.map(
          ({
            title,
            album,
            artist,
          }) => (
            {
              artist: artist.name,
              album: {
                title: album.title,
                picture: album.cover_small,
              },
              title,
            }
          )
        )
      )
    )
    .catch(err => { throw err; })
);

export default {
  get,
  suggest,
};
