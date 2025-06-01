import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Navbar />

        {/* This is where the child routes will be rendered */}
        <div id='root' className='mt-20'>
          <Outlet />
          <TanStackRouterDevtools initialIsOpen={false} />
        </div>

        <Footer />
      </>
    );
  }
});
