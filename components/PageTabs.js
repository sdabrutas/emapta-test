import { useRouter } from 'next/router'
import Link from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const PageTabs = () => {
  const router = useRouter();
  const currentTab = router.pathname === '/' ? 0 : 1;
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentTab}>
          <Link href="/" passHref>
            <Tab label="Home" />
          </Link>
          <Link href="/about" passHref>
            <Tab label="About" />
          </Link>
      </Tabs>
    </Box>
  );
};

export default PageTabs;
