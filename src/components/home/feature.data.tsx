import React, { ReactNode } from 'react'
import { PersonPin } from '@mui/icons-material'
import { Psychology } from '@mui/icons-material'
import { CastForEducation } from "@mui/icons-material";
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import { AccessTime } from '@mui/icons-material'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easily Accessable',
    description: 'Empowering students with accessibility is our core mission, ensuring that every learner can easily access and benefit from our educational resources.',
    icon: <PersonPin />,
  },
  {
    title: 'Budget Friendly',
    description: 'Delivering high-quality education at a more affordable cost is our pledge, making learning accessible without breaking the bank.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Education made fun',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Independence to knowledge',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <Psychology />,
  },
  {
    title : 'Time Flexibility',
    description : 'Our platform offers the flexibility to study at your own pace and on your schedule, empowering you to balance your education with your busy life.',
    icon : <AccessTime />
  },
  {
    title : '24/7 Guidance and Mentorship',
    description : 'Experience personalized growth with one-on-one consultations with experienced mentors who guide your educational journey.',
    icon : <CastForEducation />
  }
]
