import Audio from './platform/m86297.js'
import Template from './platform/m79600.js'
import { wedding, music } from './data'

export default function App() {
  return (
    <>
      <Audio src={music}>
        <Template wedding={wedding} photos={[]} isGuest />
      </Audio>
    </>
  )
}
