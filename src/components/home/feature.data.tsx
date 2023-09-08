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
    description: 'Experience the magic of learning as it comes to life, seamlessly merging education with entertainment, making the process not just informative but truly enjoyable.',
    icon: <LocalLibraryIcon />,
  },
  {
    title : '24/7 Guidance and Mentorship',
    description : 'Experience personalized growth with one-on-one consultations with experienced mentors who guide your educational journey.',
    icon : <CastForEducation />
  }
]
