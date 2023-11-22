import React from 'react'
import '../styles/views/Home.css'
import { TableauEmbed, type TableauEmbedProps } from './TableauEmbed'
import { RemoteDashboard } from './remote/RemoteDashboard'
import { NavHeader } from 'NavHeader'

export const Home = () => {
  const compensationVizProps: TableauEmbedProps = {
    workbookUrl: 'Compensation_17005461737460/Dashboard1',
    newDataUrl: '',
  }

  const locationVizProps: TableauEmbedProps = {
    workbookUrl: 'DataScienceJobListingMap_17006365675910/Dashboard1',
    newDataUrl: '',
  }

  return (
    <div className='main-container'>
      <NavHeader />

      <div className='main-content'>
        <div className='main-header'>
          <h1 style={{ fontWeight: 'bold' }}>Interested in data science?</h1>
          <p style={{ fontSize: '1.2em' }}>
            We&apos;ll help you understand the industry and find the job
            that&apos;s right for you.
          </p>
        </div>

        <div>
          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>Where are you located?</h1>
          </div>
          <TableauEmbed {...locationVizProps} />

          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>
              Is remote work important to you?
            </h1>
          </div>
          <RemoteDashboard />

          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>
              What kind of compensation can you expect?
            </h1>
          </div>
          <TableauEmbed {...compensationVizProps} />
        </div>
      </div>
    </div>
  )
}
