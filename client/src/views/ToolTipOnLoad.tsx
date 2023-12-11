// TooltipOnLoad.tsx
import React, { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

interface TooltipOnLoadProps {
  message: string
}

export const TooltipOnLoad: React.FC<TooltipOnLoadProps> = ({ message }) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    // Set the tooltip to be open on page load
    setOpen(true)

    // Close the tooltip after a certain delay (e.g., 3 seconds)
    const timeoutId = setTimeout(() => {
      setOpen(false)
    }, 4000)

    // Clear the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId)
    }
  }, []) // Empty dependency array ensures the effect runs only once on mount

  return (
    <Tooltip open={open} title={message}>
      <div />
    </Tooltip>
  )
}
