import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TimeDisplay from '../../ui/atoms/TimeDisplay'

interface AppProps {
  name: string;
  elapsedTime: number;
  toggleBtnVerbiage: 'Start' | 'Pause';
  togglePause: () => void;
  resetSession: () => void;
}

const Presenter = ({
  name,
  elapsedTime,
  toggleBtnVerbiage,
  togglePause,
  resetSession,
}: AppProps): JSX.Element => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ pt: 0 }}>
            <h2>{name}</h2>
          </Grid>

          <Grid item xs={12}>
            <TimeDisplay msTime={elapsedTime} />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={togglePause}>
              {toggleBtnVerbiage}
            </Button>

            <Button variant="text" onClick={resetSession}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Presenter
