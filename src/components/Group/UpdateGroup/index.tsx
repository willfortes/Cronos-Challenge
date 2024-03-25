import { SubmitHandler, useForm } from "react-hook-form";
import { Group } from "../../../types/group.type";
import useGroup from "../hooks/useGroup";
import { PlusIcon } from "@heroicons/react/24/solid"
import { useState } from "react";
import { toast } from "react-toastify";

type IUpdateProps = {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    group: Group
}

const UpdateGroup = ({show, setShow, group}: IUpdateProps) => {
    const {
        register,
        handleSubmit,
        setValue
    } = useForm<Group>()

    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState<string>("");

    const handleTag = (tag: any) => {
        setTag(tag.target.value)
    }

    const handleTags = () => {
        setTags((tags) => [...tags, tag])
        setValue('tags', tags)
        setTag("")
    }
    
    const [settings, setSettings] = useState<string[]>([]);
    const [setting, setSetting] = useState<string>("");

    const handleSetting = (setting: any) => {
        setSetting(setting.target.value)
    }

    const handleSettings = () => {
        setSettings((settings) => [...settings, setting])
        setValue('settings', settings)
        setSetting("")
    }

    setValue('id', group.id)
    setValue('name', group.name)
    setValue('owner', group.owner)
    setValue('settings', group.settings)
    setValue('items', group.items)

    const updateGroup = useGroup((state: any) => state.updateGroup)
    const onSubmit: SubmitHandler<Group> = (data) =>{
        toast(`Group ${data.name} updated created!`, {type: "success"})
        updateGroup(group.id, data)
        setShow(!show)
    }

    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <input {...register("name")} type="text" id="name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="owner" className="block text-sm font-medium leading-6 text-gray-900">
                        Owner
                    </label>
                    <div className="mt-2">
                        <input {...register("owner")} type="text" id="owner" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Owner"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Items
                    </label>
                    <div className="mt-2">
                        {/* <input {...register("items")} type="text" id="Items" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Items"/> */}
                        <ul>
                            {group.items && group.items.map((item) => (
                                <li key={item.id}>{item.payer.payer_name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">
                        Tags: {tags.map((tags) => `${tags}, `)}
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <div className="relative flex flex-grow items-stretch focus-within:z-10">
                            <input
                                onChange={handleTag}
                                value={tag}
                                type="text"
                                name="tag"
                                id="tag"
                                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Tags"
                            />
                        </div>
                            <button
                                onClick={handleTags}
                                type="button"
                                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                <PlusIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </button>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="setting" className="block text-sm font-medium leading-6 text-gray-900">
                        settings: {settings.map((tags) => `${tags}, `)}
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <div className="relative flex flex-grow items-stretch focus-within:z-10">
                            <input
                                onChange={handleSetting}
                                value={setting}
                                type="text"
                                name="setting"
                                id="tag"
                                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Settings"
                            />
                        </div>
                            <button
                                onClick={handleSettings}
                                type="button"
                                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                <PlusIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </button>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                        Save
                    </button>
                </div>
           </form>
        </div>
    )
}

export default UpdateGroup;