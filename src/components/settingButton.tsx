import { CogIcon } from "@heroicons/react/outline"

const settingButton = () => {
    return (
        <div className="self-center">
            <div className="h-10 w-14 cursor-pointer text-white border-2 flex items-center justify-center bg-white border-borderColor rounded-md shadow-sm">
                <CogIcon className="text-grayColor h-6" />
            </div>
        </div>
    )
}

export default settingButton

