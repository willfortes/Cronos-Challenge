import { Group } from "../../../types/group.type"
import { XMarkIcon } from "@heroicons/react/24/solid"
type IShowGroup = {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    group: Group
}

const ShowGroup = ({show, setShow, group}: IShowGroup) => {

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-6 sm:px-6 flex justify-between">
            <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">Group Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details for group and items.</p>
            </div>
            <XMarkIcon width={30} className="cursor-pointer" onClick={() => setShow(!show)}/>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{group.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Owner</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{group.owner}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Tags</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{group.tags}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Settings</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{group.settings}</dd>
            </div>
            
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">Items</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  {group.items?.map((item) => (
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">{item.payer.payer_name}: </span>
                            <span className="truncate font-medium">{item.payer.payer_address} /</span>
                            <span className="truncate font-medium">{item.payer.payer_address_zipcode} /</span>
                            <span className="truncate font-medium">{item.payer.payer_address_state} </span>
                            </div>
                        </div>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    )
}

export default ShowGroup;