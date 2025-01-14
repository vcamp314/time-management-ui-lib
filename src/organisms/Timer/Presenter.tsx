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
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <h2>{name}</h2>
        </Grid>

        <Grid item xs={12}>
          <TimeDisplay msTime={elapsedTime} />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" onClick={togglePause}>
              {toggleBtnVerbiage}
            </Button>

            <Button variant="text" onClick={resetSession}>
              Reset
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Presenter
