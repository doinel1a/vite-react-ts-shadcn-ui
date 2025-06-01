import useConfiguration from '@/core/hooks/use-configuration';
import { cn, isStringNullOrEmpty } from '@/lib/utils';

import { Skeleton } from '../ui/skeleton';
import marketing from './config/marketing';
import sections from './config/sections';
import styles from './footer.module.css';

export default function Footer() {
  const { config, loading } = useConfiguration();

  const currentYear = new Date().getFullYear();

  const getCopyrightYearRange = () => {
    if (config.foundingYear === currentYear) return config.foundingYear;
    return `${config.foundingYear} - ${currentYear}`;
  };

  return (
    <footer
      className={cn(styles.footer, 'flex h-10 w-full items-center justify-center border-t text-sm')}
    >
      <div className='h-full w-full'>
        {/* Marketing */}
        <div className='mx-auto h-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <div className='text-teal-600'></div>

          <ul className='flex h-full items-center justify-end gap-6 sm:mt-0 sm:justify-end'>
            {marketing.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  <item.icon className='h-6 w-6' />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className='w-full border-t border-gray-100 bg-white p-0 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-8'>
          <div className='mx-auto'>
            {/* Grid */}
            <div className='mx-0 flex flex-wrap justify-center gap-8 sm:mx-10 sm:flex-nowrap sm:justify-between sm:gap-4'>
              <div className='mx-auto !mt-0 grid grid-cols-2 gap-x-2 gap-y-8 sm:mx-0 sm:grid-cols-4 lg:grid-cols-4'>
                {sections.map((section) => {
                  return (
                    <div key={section.label} className='text-center sm:text-left'>
                      <p className='mb-2 text-lg font-semibold text-gray-900'>{section.label}</p>
                      <ul className='space-y-4 text-sm'>
                        {section.items.map((item) => {
                          return (
                            <li key={item.label}>
                              <a
                                className='text-gray-700 transition hover:text-gray-700/75'
                                href={item.url}
                              >
                                {item.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legal */}
            <div className='!mt-4 flex h-12 items-center justify-between border-t border-gray-100 sm:flex sm:items-center sm:justify-between'>
              <p className='text-sm text-gray-500 sm:text-left'>
                {config.name} &copy; {getCopyrightYearRange()}. Tous droits réservés.
              </p>

              {/* App & Api info */}
              <div className='flex justify-end gap-4 text-xs text-gray-400'>
                <div className='flex flex-col gap-2'>
                  {/* Frontend Version */}
                  <p>APP v{import.meta.env.VITE_REACT_APP_VERSION}</p>

                  {/* Backend Version */}

                  {!isStringNullOrEmpty(config.apiUri) && (
                    <>
                      {' | '}
                      {loading ? (
                        <Skeleton className='h-4 w-16' />
                      ) : (
                        <p>API v{(config.apiVersion ?? 'N/A').replace('v', '')}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
