import { graphql, http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick'
    });
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings'
          },
          {
            title: 'The Matrix'
          },
          {
            title: 'Star Wars: Empire Strikes Back'
          }
        ]
      }
    });
  })
];
