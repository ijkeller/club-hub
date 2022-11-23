import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar';
import { Paper, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function SidebarRight() {

  const axios = require('axios');
  const env = require('env');

  let MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
  let MOVIE_Key = process.env.NEXT_PUBLIC_MOVIE_Key;


      <Stack sx={{ height: '88vh', top: '10vh', width: '13vw', paddingLeft: '20px', backgroundColor: '#2F3C7E', right: '.05%', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '20px', textAlign: 'center', paddingRight: '15px' }}>
        <Paper
          component="form"
          sx={{ borderRadius: '10px', display: 'flex', alignItems: 'center', width: 'auto', mt: '10px' }}
        >
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Search Website"
          />
          <IconButton type="button" sx={{}} aria-label="search" onClick={() => buttonClick('title')}>
            <SearchIcon />
          </IconButton>
        </Paper>

        <Box sx={{ flexGrow: 2, }}>
          <Box sx={{ backgroundColor: '#FBEAEB', height: '50%', width: 'auto', borderRadius: '10px',  }}>
            <Box sx={{padding: '1px', mt: '20px' }}>
              <h2>Whats New in the Media</h2>
            </Box>
            <Typography> Kris </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#FBEAEB', height: '40%', width: 'auto', borderRadius: '10px',  }}>
            <Box sx={{ padding: '1px', mt: '20px' }}>
              <h2>Suggested Friends</h2>
            </Box>
            <Typography> Kris </Typography>
            <Typography> Hayden </Typography>
            <Typography> KC </Typography>
            <Typography> Isaiah </Typography>
            <Typography> Jun </Typography>
          </Box>

  let url = `${MOVIE_API}InTheaters/${MOVIE_Key}`;
  console.log('url: ', url)

  // async function getData() {
  //   try {
  //     return await axios.get(url)
  //       .then(response => {
  //         return response.data.items.slice(0, 10).map(result => (
  //           ({
  //             medium: 'movie',
  //             id: result.id,
  //             title: result.title,
  //             directors: result.directors,
  //             stars: result.stars,
  //             rating: result.contentRating,
  //             genres: result.genres,
  //             image: result.image,
  //             plot: result.plot,
  //           })
  //         ));
  //       })
  //   } catch (error) {
  //     console.error('Error in SidebarRight.js: ', error)
  //   }
  // }

  let exampleData = {
    directors: "Ryan Coogler",
    genres: "Action, Adventure, Drama",
    id: "tt9114286",
    image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
    medium: "movie",
    plot: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    rating: "PG-13",
    stars: "Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke",
    title: "Black Panther: Wakanda Forever",
  }

  return (
    <>
      <Stack sx={{ height: '88vh', top: '10vh', width: '10%', paddingLeft: '20px', backgroundColor: '#2F3C7E', right: '.05%', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '15px', textAlign: 'center', paddingRight: '5px' }}>
        <Box sx={{ flexGrow: 1 }}>
          {exampleData ?
            <>
              <h2>Recommended</h2>
              <Card>
                {/* <CardHeader title={exampleData.title} /> */}
                <CardMedia sx={{ display: 'flex', justifyContent: 'center' }} >
                  <Image
                    src={exampleData.image}
                    alt={exampleData.title}
                    width={200}
                    height={240}
                  />
                </CardMedia>
                {/* <CardContent >
                <p>{exampleData.plot}</p>
              </CardContent> */}
              </Card>
            </>
            : null
          }
          { 
            <>
              <h2>Suggested Friends</h2>
            </>
          }

        </Box>

        <Box sx={{ display: 'flex', paddingLeft: 'auto' }}>
          <h5> &copy;Social Media</h5>
        </Box>
      </Stack>
    </>
  )
}

export default SidebarRight;