import FacebookIcon from '@/assets/icons/facebook.svg?react';
import GithubIcon from '@/assets/icons/github.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import XIcon from '@/assets/icons/x.svg?react';

const marketing: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
}[] = [
  {
    icon: FacebookIcon,
    url: 'https://facebook.com'
  },
  {
    icon: LinkedInIcon,
    url: 'https://linkedin.com'
  },
  {
    icon: GithubIcon,
    url: 'https://github.com'
  },
  {
    icon: XIcon,
    url: 'https://x.com'
  }
];

export default marketing;
