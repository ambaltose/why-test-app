"use client"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { BreedStats } from '../FilterList'

export default function BreedListBox({ breeds } : { breeds: BreedStats[]}) {
  const [selected, setSelected] = useState({ name: "Select breed"})

  return (
    <div className="mx-auto h-screen w-52">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className="relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 w-4 h-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        >
            <ListboxOption
              key={0}
              value={{name: "Select Breed"}}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible w-4 h-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-gray-400">None</div>
            </ListboxOption>
          {breeds.map(breed => (
            <ListboxOption
              key={breed.id}
              value={breed}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible w-4 h-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{breed.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}