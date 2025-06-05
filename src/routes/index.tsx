import { useEffect, useState } from 'react';

import type { MovieDTO } from '@/types/aggregates/movies-aggregate';
import type { UserDTO } from '@/types/aggregates/users-aggregate';

import { createFileRoute } from '@tanstack/react-router';

import { Card, CardContent } from '@/core/components/ui/card';
import { Skeleton } from '@/core/components/ui/skeleton';

export const Route = createFileRoute('/')({
  component: Index
});

export default function Index() {
  const [name, setName] = useState<string | undefined>();
  const [movies, setMovies] = useState<MovieDTO[] | undefined>();

  useEffect(() => {
    void fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        setName((data as UserDTO).firstName + ' ' + (data as UserDTO).lastName);
      });
  }, []);

  useEffect(() => {
    void fetch('https://api.example.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
              query ListMovies {
                movies {
                  title
                }
              }
            `
      })
    })
      .then((response) => response.json())
      .then((data) => {
        const typedData = data as { data: { movies: MovieDTO[] } };
        const movies = typedData.data.movies;
        setMovies([...movies]);
      });
  }, []);

  if (!name) return <p>Loading...</p>;

  return (
    <div className='page-content flex flex-col gap-6 pt-12'>
      <div className='mt-12 mb-24 flex flex-col'>
        <h1 className='raleway3'>
          Welcome to <span className='text-teal-600'>launchplate-react</span>
        </h1>
        <article className='prose dark:prose-invert lg:prose-xl'>
          <p className='text-muted-foreground'>
            This is a <b>template</b> for <i>building modern web applications</i> with React,
            TypeScript, and Vite. It includes a set of features and best practices to help you get
            started quickly.
          </p>
          <p className='text-muted-foreground'>
            The application is built with the latest version of React and Vite, and it uses
            TypeScript for type safety and better developer experience. It also includes a set of
            tools and libraries to help you build modern web applications, such as Tailwind CSS for
            styling, React Router for routing, and MSW for mocking APIs.
          </p>
        </article>
      </div>

      <div className='hero-item'>
        <h1 className='hero-item-title'>
          Use mock APIs to simulate responses{' '}
          <p className='hero-item-description'>(cf. `src/mocks/browser.ts`)</p>
        </h1>
        <Card className='w-full p-4'>
          <CardContent className='hero-card-content'>
            {name ? (
              <h1 data-testid='greeting' className='raleway3'>
                Hello, <span className='italic opacity-75'>{name}</span> !
              </h1>
            ) : (
              <Skeleton className='h-8 w-48' />
            )}

            {movies ? (
              <div className='flex flex-col items-start justify-center gap-2'>
                <h2 className='raleway5'>Movies selected for you</h2>
                <ul
                  data-testid='graphql-response'
                  className='grid auto-cols-fr auto-rows-fr gap-2 md:grid-cols-3'
                >
                  {movies.map((movie) => (
                    <li key={movie.title}>
                      <Card className='flex h-full items-center justify-center px-2 py-3'>
                        <p aria-label='Movie Title'>{movie.title}</p>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className='flex items-center justify-center'>
                <Skeleton className='h-8 w-48' />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className='hero-item'>
        <h1 className='hero-item-title'>
          Comes with pre-defined google & static fonts
          <p className='hero-item-description'>
            Class name formats are:
            <ul className='list-disc pl-4'>
              <li>.font-&lt;family-name&gt; and headings</li>
              <li>.&lt;family-name&gt;&lt;style-number&gt;</li>
            </ul>
            <span className='block'>* Example: .font-roboto, .roboto1, .roboto2, etc.</span>
          </p>
        </h1>
        <Card className='w-full p-4'>
          <CardContent className='hero-card-content'>
            <div className='col-span-[0.8] flex flex-col'>
              <p className='raleway3'>Raleway 3</p>
              <p className='raleway4'>Raleway 4</p>
              <p className='raleway5'>Raleway 5</p>
            </div>
            <div className='flex flex-col'>
              <p className='brockmann3'>Brockmann 3</p>
              <p className='brockmann4'>Brockmann 4</p>
              <p className='brockmann5'>Brockmann 5</p>
            </div>
            <div className='col-span-[0.8] flex flex-col'>
              <p className='roboto3'>Roboto 3</p>
              <p className='roboto4'>Roboto 4</p>
              <p className='roboto5'>Roboto 5</p>
            </div>
            <div className='flex flex-col'>
              <p className='kg3'>Raleway 3</p>
              <p className='kg4'>Raleway 4</p>
              <p className='kg5'>Raleway 5</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='hero-item'>
        <h1 className='hero-item-title'>
          Prettify html with `.prose` class
          <p className='hero-item-description'>
            Based on{' '}
            <a href='https://github.com/tailwindlabs/tailwindcss-typography'>
              tailwindcss-typography
            </a>
            ; This is a Tailwind CSS plugin that provides a set of classes to style HTML elements
            with a consistent and modern look.
          </p>
        </h1>
        <Card className='w-full p-4'>
          <CardContent className='hero-card-content !flex'>
            <article className='prose dark:prose-invert lg:prose-xl w-full !max-w-none'>
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating garlic bread with
                cheese to their children, with the food earning such an iconic status in our culture
                that kids will often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be linked to a series of
                rabies cases springing up around the country.
              </p>
            </article>
          </CardContent>
        </Card>
      </div>

      <div className='hero-item'>
        <h1 className='hero-item-title'>Test with Playwright & Vitest</h1>
        <Card className='w-full p-4'>
          <CardContent className='hero-card-content'>
            <div className='prose dark:prose-invert'>
              <h3 className='raleway4 not-prose'>Playwright</h3>
              <p>
                Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a
                single API. It is built to enable cross-browser web automation that is ever-green,
                capable, reliable, and fast. It is used for end-to-end testing of web applications.
              </p>
              <p>
                Playwright is a great tool for testing web applications, and it is used in this
                project to test the application in different browsers and devices. It is configured
                in the
                <code className='font-mono'>playwright.config.ts</code> file.
              </p>
            </div>
            <div className='prose dark:prose-invert'>
              <h3 className='raleway4 not-prose'>Vitest</h3>
              <p>
                Vitest is a blazing fast unit test framework powered by Vite. It is used to test the
                application in a fast and efficient way. It is configured in the{' '}
                <code className='font-mono'>vitest.config.ts</code> file.
              </p>
              <p>
                Vitest is used to test the application in a fast and efficient way, and it is used
                in this project to test the application in different browsers and devices.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='hero-item'>
        <h1 className='hero-item-title'>Track code quality with Betterer</h1>
        <Card className='w-full p-4'>
          <CardContent className='hero-card-content'>
            <div className='prose dark:prose-invert'>
              <h3 className='raleway4 not-prose'>Betterer</h3>
              <p>
                Betterer is a tool for tracking code quality over time. It is used to track the
                quality of the code in this project. It is configured in the{' '}
                <code className='font-mono'>betterer.config.ts</code> file.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
