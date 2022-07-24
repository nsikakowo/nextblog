import {Featured, Playlist, Section1, Slider, Trending} from "../components"
import Defaultlayout from '../layout/defaultlayout'

export default function Home() {
  return (
      <main className='container'>
        <Defaultlayout>
            <Slider/>
            <Section1/>
            {/* <Playlist/> */}
            <Trending/>
            <Featured/>
        </Defaultlayout>
      </main>
  
  )
}
