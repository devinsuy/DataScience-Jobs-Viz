/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import '../styles/views/Home.css'
import { SectionDivider, Spacer } from './UtilComponents'
interface Profile {
  name: string
  email: string
  image: string
}

const profiles: Profile[] = [
  {
    name: 'Chris Grimes',
    email: 'chgrimes@berkeley.edu',
    image: require('../assets/images/profile/Chris.png'),
  },
  {
    name: 'Devin Suy',
    email: 'devinsuy@berkeley.edu',
    image: require('../assets/images/profile/Devin.jpg'),
  },
  {
    name: 'James Meyer',
    email: 'jmeyer@berkeley.edu',
    image: require('../assets/images/profile/James.jpg'),
  },
  {
    name: 'Victor Chen',
    email: 'victor.z.chen@berkeley.edu',
    image: require('../assets/images/profile/Victor.jpg'),
  },
]

interface DataSource {
  title: string
  url: string
  description: string
}

const dataSources: DataSource[] = [
  {
    title: 'Data Science Job Postings (Indeed USA)',
    url: 'https://www.kaggle.com/datasets/yusufolonade/data-science-job-postings-indeed-usa',
    description:
      'This dataset contains job listings across many data science positions which includes data scientist, machine learning engineer, data engineer, business analyst, data science manager, database administrator, business intelligence developer and director of data science in the US. There are 1200 rows and 9 columns. The column headings are job title, company, location, rating, date, salary, description (summary), links and descriptions (full). The data was web scraped from indeed web portal on Nov 20, 2022 using the indeed API.',
  },
  {
    title: '10000 Data Scientist Job Postings from the USA',
    url: 'https://www.kaggle.com/datasets/jobspikr/data-scientist-job-postings-from-the-usa',
    description:
      'This data set covers the job listings for Data Scientists from the United States extracted from popular job boards via JobsPikr.',
  },
  {
    title: 'Data scientist salary',
    url: 'https://www.kaggle.com/datasets/nikhilbhathi/data-scientist-salary-us-glassdoor',
    description:
      "This dataset was made by scrapping the job postings related to the position of 'Data Scientist' from www.glassdoor.com in USA, selenium was used scrape the data. After scrapping the raw data, I removed the duplicated rows from it which reduced the records from 1000 to 742. After this, several simplifications were performed to make the data user friendly for further data analysis and modeling.",
  },
  {
    title: 'LinkedIn Job Data',
    url: 'https://www.kaggle.com/datasets/shashankshukla123123/linkedin-job-data',
    description:
      'The LinkedIn data set provided contains 7,927 rows and 15 columns, providing a comprehensive overview of job postings on the platform. The data can be used for data analysis, visualization, and research. The job postings include Data Analyst, Machine Learning Engineer, IT Services and IT Consulting roles, located in various locations around the world, with varying salaries and work hours. The data set includes information about the company, role responsibilities, and required skills for each job. This data set is a valuable resource for understanding job opportunities in different industries and locations.',
  },
]

export const AboutPage = (): React.ReactElement => {
  return (
    <div>
      <Spacer height={30} />
      <h1>About Us</h1>
      <Spacer height={40} />

      {/* Profiles section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
          marginRight: '20px',
        }}
      >
        {profiles.map((profile, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={profile.image}
              alt={`${profile.name}'s profile`}
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
            <div>
              <h3 style={{ fontWeight: 'bold' }}>{profile.name}</h3>
              <Spacer height={5} />
              <p>{profile.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Spacer height={80} />
        <h1>Interested in Data Science?</h1>
        <Spacer height={20} />
        <p>
          This website exists to shed light on the current state of jobs in the
          data science industry, as well as how the industry has changed over
          the past few years. Whether you are someone looking to break into a
          new industry, a candidate considering different job offers and
          opportunities, or even a recruiter or hiring manager seeking to set
          yourself apart, the goal is to help answer important questions that
          you may have such as:
        </p>
        <ul>
          <li>Where are the majority of data science jobs located?</li>
          <Spacer height={5} />
          <li>What kind of job titles should I be looking for?</li>
          <Spacer height={5} />
          <li>
            What keywords or ideas would help my resume align with job postings?
          </li>
          <Spacer height={5} />
          <li>How has the industry changed over time?</li>
          <Spacer height={5} />
          <li>What kind of salaries might I expect to see?</li>
          <Spacer height={5} />
          <li>
            What kind of opportunities for remote work exist in this industry?
          </li>
        </ul>
        <Spacer height={10} />
        <p>
          Drawing on a number of different publicly available datasets on
          Kaggle, the data used to create these visualizations includes close to
          20,000 job listings across the United States & India from two major
          listing websites and covers the period from 2017-2023. For a closer
          look at the data, please see the following data section below.
        </p>
        <Spacer height={20} />
        <SectionDivider />
        <Spacer height={20} />
        <h1>Data</h1>
        <Spacer height={20} />
        {dataSources.map(dataSource => {
          const { title, url, description } = dataSource
          return (
            <>
              <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
              <Spacer height={10} />
              <a style={{ color: 'blue' }} href={url}>
                {url}
              </a>
              <Spacer height={10} />
              <p>{description}</p>
              <Spacer height={40} />
            </>
          )
        })}
      </div>
    </div>
  )
}
