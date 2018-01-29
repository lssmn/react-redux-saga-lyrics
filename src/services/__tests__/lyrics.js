import * as service from '../lyrics';

describe('lyrics service', () => {

  describe('get', () => {

    it('should return the lyrics', () => {
      const request = {
        artist: 'Artist', 
        title: 'Title',
      };
  
      const mockResponse = {
        ...request,
        lyrics: 'Lyrics',
      };
  
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => mockResponse
        })
      );
 
      service.get(request).then(response => {
        expect(response).toEqual(mockResponse);
      }).catch(err => {
        expect(err).toEqual(null);
      });
    });

    it('should catch any error', () => {
      const request = {
        artist: 'Artist', 
        title: 'Title',
      };

      global.fetch = jest.fn().mockImplementation(() => 
        Promise.reject('Error !')
      );

      service.get(request).catch(err => {
        expect(err).toEqual('Error !');
      });
    });

  });

  describe('suggest', () => {

    it('should return the suggestions list', () => {
      const query = 'Query';
  
      const mockResponse = [
        {
          title: '',
          artist: '',
          album: {
            title: '',
            picture: '',
          },
        }
      ];
  
      const promise = Promise.resolve({
        json: () => ({ 
          data: [
            {
              title: '',
              artist: {
                name: '',
                picture_small: '',
              },
              album: {
                title: '',
                cover_small: '',
              },
            }
          ]
        })
      });

      global.fetch = jest.fn().mockImplementation(() => promise);
 
      service.suggest(query).then(response => {
        expect(response).toEqual(mockResponse);
      }).catch(err => {
        expect(err).toEqual(null);
      });
    });

    it('should catch any error', () => {
      const query = 'Query';

      global.fetch = jest.fn().mockImplementation(() => 
        Promise.reject('Error !')
      );

      service.suggest(query).catch(err => {
        expect(err).toEqual('Error !');
      });
    });
  
  });

});
