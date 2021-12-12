import LeftHeader from "./types/leftHeader"

const App = () => {
  return (
    <main className="container mx-auto py-4">
      <div className="grid grid-cols-4">
        <section>
          <LeftHeader/>
        </section>
        
        <section className="col-span-3">
          
        </section>
      </div>
    </main>
  )
}
export default App


