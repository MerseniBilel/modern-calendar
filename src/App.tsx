import emoji from "./assets/memoji.png";
import Memoji from "./components/Memoji";

const App = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-4 gap-">
        <div className="flex justify-between">
            <div className="bg-pink-400 h-20 w-20 flex items-center justify-center rounded-full">
                <Memoji alt={emoji} emoji={emoji} className={"h-20"}  />
            </div>
            <div>
              {/** buttom with setting icon if press change to the dark mode */}
            </div>
        </div>
        <div className="col-span-3">the right side</div>
      </div>
    </div>
  )
}
export default App