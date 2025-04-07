import Header from "./components/Header"
import Entry from "./components/Entry"
import TravelData from "./data"

export default function App() {

  const travelElements = TravelData.map((travel) => {
    return <Entry 
              key = {travel.id}
              img = {travel.img}
              alt = {travel.alt}
              title = {travel.title}
              country = {travel.country}
              googleMapsLink = {travel.googleMapsLink}
              dates = {travel.dates}
              text = {travel.text}
    /> 
  })

  return (
    <>
      <Header />      
      <main className="container">
          {travelElements}
      </main>
    </>
  )
}
