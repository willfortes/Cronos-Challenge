import useGroup from "../hooks/useGroup"

const SearchGroup = () => {

    const searchGroups = useGroup((state: any) => state.searchGroups)

    const handleSearch = (query: any) => {
        searchGroups( query.target.value)
    }

    return (
        <div className="relative w-full">
            <input type="search" onChange={handleSearch} id="location-search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for city or address" required />
        </div>
    )
}

export default SearchGroup