/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import '../styles/views/Home.css'
import { Spacer } from './UtilComponents'
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Spacer height={20} />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </div>
  )
}
