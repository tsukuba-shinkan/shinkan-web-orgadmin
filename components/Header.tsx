import React from 'react'
import { AppProps } from 'next/app'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
  return(
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            ホーム
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
