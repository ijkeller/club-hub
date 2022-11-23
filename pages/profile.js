import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import SidebarRight from '../components/SidebarRight';
import FavItem from '../components/FavItem';
import Footer from '../components/Footer';
import { Grid, Pagination, Container, Box, Stack } from '@mui/material';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default function Profile() {


  const { data: session, status } = useSession();
  // console.log('profile.js session: ', session)

  const user = { // temp placeholder for data pulled from db
    email: 'session.user.email',
    name: 'session.user.name',
    favorites: [{ medium: "book", title: "The Marvelous Land of Oz", author: "L. Frank Baum", image: "https://covers.openlibrary.org/b/id/12648656-M.jpg", year: 1904 }, { medium: "book", title: "Forrest Gump", author: "Winston Groom", image: "https://covers.openlibrary.org/b/id/981738-M.jpg", year: 1999 }, { medium: "music", title: "Beyoncé - Beyoncé", image: "https://i.discogs.com/0c7GsXhMpPElxHjt1waJTG4XVj3tUGo1VF4N3T_1WWc/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1Nzcz/NzktMTQ4MzA0NjI2/Ni00OTE0LmpwZWc.jpeg", artist: "Beyoncé - Beyoncé", year: "2014" }, { medium: "movie", title: "Stephen King's IT", image: "https://m.media-amazon.com/images/M/MV5BZTk4MzVhYzAtMWU0ZC00ZjJmLTllN2YtMjIzZTRmODg5NDhjXkEyXkFqcGdeQXVyOTE3NTA1NTY@._V1_Ratio1.6364_AL_.jpg", artist: "Stephen King's IT", description: "(TV Series)" } ],
  }

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{padding: '4.2vh'}}></Box>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3} sx={{ margin: 'auto' }}>
              {user.favorites.map(item => (
                <Grid key={item.id} item xs={4}>
                  <FavItem item={item} />
                </Grid>
              ))}
            </Grid>
            {/* {data.length > 0 ? <Pagination onChange={(_, page) => setPage(page)} count={numPages} /> : null} */}
          </Grid>
          <Grid item xs={2}>
            <SidebarRight />
          </Grid>
        </Grid>
      </main>

    </>
  )
}
