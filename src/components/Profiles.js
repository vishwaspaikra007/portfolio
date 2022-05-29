import React from 'react'
import styles from './Profiles.module.css'
import MotionH1 from './MotionH1'
import ImageBox from './ImageBox'

const base = 'images/profiles/'
const list = [
  ['leetcode.png', 'leetcode', 'https://leetcode.com/vishwaspaikra007/'],
  ['codechef.png', 'codechef', 'https://www.codechef.com/users/vishwas_paikra'],
  ['geeksforgeeks.png', 'geeks for geeks', 'https://auth.geeksforgeeks.org/user/vishwaspaikra/practice/'],
  ['github.png', 'github', 'https://github.com/vishwaspaikra007'],
  ['linkedln.png', 'linkedln', 'https://www.linkedin.com/in/vishwas-paikra-6a6ab6137/'],
]
export default function Profiles() {
  return (
    <div className={styles.container} id='profiles'>
      <MotionH1>Profiles</MotionH1>
      <div className={styles.imgContainer}>
        {list.map((profile, idx) => (
          <a key={idx} href={profile[2]} target="_blank">
            <ImageBox
              imgURL={base + profile[0]}
              name={profile[1]}
              type={idx % 4}
              delay={0.1 * idx}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
