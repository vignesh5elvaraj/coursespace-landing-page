import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      
      <a href = "https://chat.filibot.org" target='_blank' style={{color : "#127C71", textDecoration : "none"}}>
        <StyledButton disableHoverEffect={true}  variant="outlined">FiliBot Chat</StyledButton>
      </a>

      <a href = "https://fln.filibot.org" target='_blank' style={{color : "#fff", textDecoration : "none"}}>
        <StyledButton disableHoverEffect={true}>
          FLN
        </StyledButton>
      </a>
    </Box>
  )
}

export default AuthNavigation
