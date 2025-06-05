import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Footer from '@/core/components/footer/footer';
import Navbar from '@/core/components/navbar/navbar';
import { Breadcrumb } from '@/core/components/ui/breadcrumb';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Breadcrumb />
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
