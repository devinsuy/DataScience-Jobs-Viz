import React from 'react'
import '../styles/views/Home.css'
import { TableauEmbed, type TableauEmbedProps } from './TableauEmbed'
import { RemoteDashboard } from './remote/RemoteDashboard'
import { NavHeader } from 'NavHeader'
import { CountryCounts, JobDesc, RemoteAllowedCounts, RemoteByCountry, RemoteByYear } from './remote/plots'

export const Home = () => {
  const compensationVizProps: TableauEmbedProps = {
    workbookUrl: 'Compensation_17005461737460/Dashboard1',
    newDataUrl: '',
  }

  const locationVizProps: TableauEmbedProps = {
    workbookUrl: 'DataScienceJobListingMap_17006365675910/Dashboard1',
    newDataUrl: '',
  }

  const compRef = React.useRef<HTMLDivElement>(null)
  const locRef = React.useRef<HTMLDivElement>(null)
  const remoteRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className='main-container'>
      <NavHeader {...{ compRef, locRef, remoteRef, titleRef }} />

      <div className='main-content'>
        <div className='main-header'>
          <h1 style={{ fontWeight: 'bold' }}>Interested in data science?</h1>
          <p style={{ fontSize: '1.2em' }}>
            We&apos;ll help you understand the industry and find the job
            that&apos;s right for you.
          </p>
        </div>

        <div ref={locRef}>
          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>Where are you located?</h1>
          </div>
          <TableauEmbed {...locationVizProps} />

          <div ref={remoteRef} className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>
              Is remote work important to you?
            </h1>
            <p style={{ fontSize: '1.2em' }}>
              We analyzed around 20 thousand unique data science job listings.
            </p>
          </div>

          <div style={{ justifyContent: 'right' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '20px' }}>How often was remote work offered?</p>
            <RemoteAllowedCounts />
            <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginTop: '20px', marginBottom: '20px' }}>Job Listings By Country</p>
            <CountryCounts />
            <div style={{ marginTop: '20px' }} />
          </div>

          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>
              What did we learn?
            </h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '20px' }}>Remote Work By Country</p>
              <RemoteByCountry />
            </div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '20px' }}>Remote Work By Year</p>
              <RemoteByYear />
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '20px' }}>Words most commonly mentioned in job descriptions</p>
          </div>
          <JobDesc />

          <div ref={compRef} style={{ marginTop: '40px' }} className='section-text'>
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
