import React from 'react'
import '../styles/views/Home.css'
import TableauEmbed, { type TableauEmbedProps } from './TableauEmbed'
import { RemoteDashboard } from './remote/RemoteDashboard'

export const Home = () => {
  const compensationVizProps: TableauEmbedProps = {
    workbookUrl: 'Compensation_17005461737460/Dashboard1',
    newDataUrl: '',
  }

  return (
    <div className='home-container'>
      {/* <TableauEmbed {...compensationVizProps} /> */}
      <RemoteDashboard />
    </div>
  )
}
