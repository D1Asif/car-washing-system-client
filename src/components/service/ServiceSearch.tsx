import { Input, InputIcon } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";


export default function ServiceSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    const urlSearchParams = new URLSearchParams(searchParams);

    const handleSearch = (term: string) => {
        if (term) {
            urlSearchParams.set("searchTerm", term);
        } else {
            urlSearchParams.delete("searchTerm")
        }

        setSearchParams(urlSearchParams)
    }

    const debouncedSearch = useDebounce(handleSearch, 500)

    return (
        <div>
            <fieldset className="relative max-w-md">
                <Input
                    placeholder="Search for service" className="ps-11"
                    defaultValue={searchParams.get("searchTerm") || ""}
                    onChange={(e) => debouncedSearch(e.target.value)}
                />
                <InputIcon>
                    <MagnifyingGlass size={19} color="#AFBACA" />
                </InputIcon>
            </fieldset>
        </div>
    )
}
