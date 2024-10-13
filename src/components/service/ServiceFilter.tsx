import { Button, Dropdown, DropdownAction, DropdownContent, DropdownList, Label, NumberInputBox, Radio, Slider } from 'keep-react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

export default function ServiceFilter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [priceRange, setPriceRange] = useState([Number(searchParams.get("minPrice")), Number(searchParams.get("maxPrice")) || 1000])

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchParams.set("sort", e.target.id)
        setSearchParams(searchParams)
    };

    const handlePriceRangeChange = () => {
        searchParams.set("minPrice", priceRange[0].toString())
        searchParams.set("maxPrice", priceRange[1].toString())

        setSearchParams(searchParams)
    }

    const debouncedHandlePriceRangeChange = useDebounce(handlePriceRangeChange, 500)

    useEffect(() => {
        debouncedHandlePriceRangeChange()
    }, [priceRange])

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button>Filter</Button>
            </DropdownAction>
            <DropdownContent className="border w-[350px]">
                <DropdownList>
                    <div className="flex flex-col gap-4 font-semibold mb-5">
                        Price range
                        <Slider
                            min={0}
                            max={1000}
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value)}
                        />
                        <div className="flex gap-4">
                            <NumberInputBox
                                className="border w-full rounded-md"
                                value={priceRange[0]}
                                onChange={(e) => setPriceRange((prev) => [Number(e.target.value), prev[1]])}
                            />
                            <NumberInputBox
                                className="border w-full rounded-md"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange((prev) => [prev[0], Number(e.target.value)])}
                            />
                        </div>

                    </div>
                    <form className="flex flex-col gap-3">
                        <legend className="font-semibold">Sort</legend>
                        <fieldset className="flex items-center gap-2">
                            <Radio
                                id="price"
                                name="sort"
                                variant="circle"
                                onChange={handleRadioChange}
                                checked={searchParams.get("sort") === "price"}
                            />
                            <Label htmlFor="price">Price Low to High</Label>
                        </fieldset>
                        <fieldset className="flex items-center gap-2">
                            <Radio
                                id="-price"
                                name="sort"
                                variant="circle"
                                onChange={handleRadioChange}
                                checked={searchParams.get("sort") === "-price"}
                            />
                            <Label htmlFor="-price">Price High to Low</Label>
                        </fieldset>
                    </form>
                    <Button className="mt-5" size="sm" onClick={() => window.location.replace("/services")}>
                        Clear Filter
                    </Button>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}
