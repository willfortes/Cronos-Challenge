import { toast } from "react-toastify";
import SearchGroup from "./SearchGroup";
import useGroup from "./hooks/useGroup";
import CreateGroup from "./CreateGroup";
import { useState } from "react";
import UpdateGroup from "./UpdateGroup";
import { Group as GroupType } from "../../types/group.type";
import { 
    TrashIcon,
    PencilIcon,
    EyeIcon
} from '@heroicons/react/24/solid';
import ShowGroup from "./ShowGroup";

const Group = () => {
    const groups = useGroup((state: any) => state.groups)
    const deleteGroup = useGroup((state: any) => state.deleteGroup)

    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [showUpdate, setShowUpdate] = useState<boolean>(false);
    const [showView, setShowView] = useState<boolean>(false);
    const [selectedGroup, setSelectedGroup] = useState<GroupType>();

    const handleDeleteGroup = (groupId: string) => {
        toast(`Group ${groupId} successfully removed!`, {type: "success"})
        deleteGroup(groupId)
    }

    return (
        <div>
            {showCreate &&
                <CreateGroup show={showCreate} setShow={setShowCreate}/>
            }
            {
                showUpdate && selectedGroup &&
                <UpdateGroup show={showUpdate} setShow={setShowUpdate} group={selectedGroup}/>
            }
            {
                showView && selectedGroup &&
                <ShowGroup show={showView} setShow={setShowView} group={selectedGroup} />
            }
            <SearchGroup />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Groups</h1>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button type="button" onClick={() => setShowCreate(!showCreate)} className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Group</button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr className="divide-x divide-gray-200">
                            <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">#</th>
                            <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Owner</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Tags</th>
                            <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Settings</th>
                            <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {groups && groups.map((group: any) => (
                                <tr key={group.id} className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                        <EyeIcon className="cursor-pointer" width={20} onClick={() => {
                                            setShowView(!showView)
                                            setSelectedGroup(group)
                                        }}/>
                                    </td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">{group.name}</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">{group.owner}</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">{group.tags}</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{group.settings}</td>
                                    <td className="py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0 grid grid-cols-2 gap-1">

                                        <PencilIcon color="blue" className="cursor-pointer" width={20} onClick={() => {
                                            setShowUpdate(!showUpdate)
                                            setSelectedGroup(group)
                                        }}/>
                                        <TrashIcon color="red" className="cursor-pointer" width={20} onClick={() => handleDeleteGroup(group.id)}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Group;