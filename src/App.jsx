import Header from "./components/Header"
import Entry from "./components/Entry"
import TravelData from "./data"

export default function App() {

  const travelElements = TravelData.map((travel) => {
    return <Entry 
              key = {travel.id}
              {...travel}
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
