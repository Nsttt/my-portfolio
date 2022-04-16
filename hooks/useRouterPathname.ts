import { useRouter } from 'next/router';

export default function useRouterPathname() {
  const router = useRouter();

  return `https://nstlopez.com${router.asPath}`;
}
