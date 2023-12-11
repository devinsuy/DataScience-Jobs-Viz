import React, { useRef, useState } from 'react'
import '../styles/views/Home.css'
import { TableauEmbed, type TableauEmbedProps } from './TableauEmbed'
import { NavHeader } from 'NavHeader'
import {
  CloudCountryIndia,
  CloudCountryUS,
  CloudRemoteAllowedNo,
  CloudRemoteAllowedYes,
  JobDesc,
  RemoteByCountry,
  RemoteByYear,
} from './remote/plots'
import { DropdownSelect } from './DropdownSelect'
import { AllCloudPlots } from './remote/plots/wordCloud/AllCloudPlots'

export const Home = () => {
  const compensationVizProps: TableauEmbedProps = {
    workbookUrl: 'Compensation_17019148466490/Dashboard1',
    newDataUrl: '',
  }

  const locationVizProps: TableauEmbedProps = {
    workbookUrl: 'DataScienceJobListingMap/Dashboard1',
    newDataUrl: '',
  }
  const jobTitleVizProps: TableauEmbedProps = {
    workbookUrl: 'PercantageoflistingsbyJobTitle/Dashboard1',
    newDataUrl: '',
  }

  const compRef = useRef<HTMLDivElement>(null)
  const locRef = useRef<HTMLDivElement>(null)
  const remoteRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // Conditionally select which word cloud type to render
  const options = [
    'Show All Plots',
    'Unfiltered Data',
    'United States',
    'India',
    'Remote Allowed',
    'Remote Not Allowed',
  ]
  type WordCloudEnum =
    | 'Show All Plots'
    | 'India'
    | 'United States'
    | 'Unfiltered Data'
    | 'Remote Allowed'
    | 'Remote Not Allowed'
  const [cloudType, setCloudType] = useState<WordCloudEnum>('Show All Plots')

  const getWordCloud = (): React.ReactElement => {
    switch (cloudType) {
      case 'Unfiltered Data':
        return (
          <div>
            <JobDesc isAlone />
          </div>
        )
      case 'United States':
        return (
          <div>
            <CloudCountryUS isAlone />
          </div>
        )
      case 'India':
        return (
          <div>
            <CloudCountryIndia isAlone />
          </div>
        )
      case 'Remote Allowed':
        return (
          <div>
            <CloudRemoteAllowedYes isAlone />
          </div>
        )
      case 'Remote Not Allowed':
        return (
          <div>
            <CloudRemoteAllowedNo isAlone />
          </div>
        )
      case 'Show All Plots':
        return <AllCloudPlots />
    }
  }

  return (
    <div className='main-container'>
      <NavHeader {...{ compRef, locRef, remoteRef, titleRef }} />

      <div className='main-content'>
        <div className='main-header'>
          <h1 style={{ fontWeight: 'bold' }}>Interested in data science?</h1>
          {/* eslint-disable react/no-unescaped-entities */}
          <p style={{ fontSize: '1.2em' }}>
            We'll help you understand the industry and find the job that's right
            for you.
          </p>
        </div>

        <div ref={locRef}>
          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>Where are you located?</h1>
          </div>
          <TableauEmbed {...locationVizProps} />
        </div>

        <div ref={titleRef}>
          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>
              What kind of job title can you expect?
            </h1>
          </div>
          <TableauEmbed {...jobTitleVizProps} />
        </div>

        <div ref={remoteRef}>
          <div className='section-text'>
            <h1 style={{ fontWeight: 'bold' }}>
              Is remote work important to you?
            </h1>
          </div>
        </div>

        <div className='section-text'>
          <h1 style={{ fontWeight: 'bold' }}>What did we learn?</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '1.2em',
                marginBottom: '20px',
              }}
            >
              Remote Work By Country
            </p>
            <RemoteByCountry />
          </div>
          <div>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '1.2em',
                marginBottom: '20px',
              }}
            >
              Remote Work By Year
            </p>
            <RemoteByYear />
          </div>
        </div>

        <div style={{ marginTop: '60px', marginBottom: '20px' }}>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '2em',
              marginBottom: '20px',
            }}
          >
            Words most commonly mentioned in job descriptions
          </p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '1.2em' }}>Select a filter:</p>
          </div>
          <DropdownSelect
            options={options}
            onChange={(selectedOption: string) => {
              setCloudType(selectedOption as WordCloudEnum)
            }}
          />
          <div style={{ marginTop: '40px' }}>{getWordCloud()}</div>
        </div>

        <div
          ref={compRef}
          style={{ marginTop: '40px' }}
          className='section-text'
        >
          <h1 style={{ fontWeight: 'bold' }}>
            What kind of compensation can you expect?
          </h1>
        </div>
        <TableauEmbed {...compensationVizProps} />
      </div>
    </div>
  )
}
