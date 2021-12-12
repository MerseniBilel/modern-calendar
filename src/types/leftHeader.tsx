import emoji from "../assets/memoji.png";
import Memoji from '../components/Memoji';
import SettingButton from "../components/settingButton";
const leftHeader = () => {
    return (
        <div className="flex justify-between">
        <div className="flex">
          <div className="bg-pinkColor h-16 w-16 flex items-center justify-center rounded-full">
            <Memoji alt={emoji} emoji={emoji} className={"h-16"} />
          </div>
          <div className="ml-2">
            <h4 className="text-lg font-medium text-grayColor">Welcome Back,</h4>
            <h4 className="text-lg font-semibold text-titleColor">Rachel!!:)</h4>
          </div>
        </div>
        <SettingButton/>
      </div>
    )
}

export default leftHeader
