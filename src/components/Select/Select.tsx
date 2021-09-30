import React, { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck, HiSelector } from 'react-icons/hi';
import clsx from 'clsx';

export interface SelectOption {
  value: any;
  label: string;
}

export interface SelectProps {
  label: string;
  optionList: SelectOption[];
  defaultValue?: SelectOption;
  onChange: (selected: SelectOption) => void;
  vertical?: boolean;
  className?: string;
}
const itemsPerPage = [
  { value: 1, label: '3' },
  { value: 2, label: '5' },
  { value: 3, label: '10' },
  { value: 4, label: '15' },
];

const Select: React.FC<SelectProps> = ({
  label = 'Contacts Per Page',
  optionList = itemsPerPage,
  defaultValue = itemsPerPage[0],
  onChange,
  className,
}: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    onChange(selected);
  }, [onChange, selected])

  return (
    <Listbox value={selected.value} onChange={setSelected}>
      {({ open }) => (
        <span className={className}>
          <Listbox.Label className="label block text-sm font-medium text-gray-700">{label}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.value}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {optionList.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      clsx(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {option.value}
                        </span>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </span>
      )}
    </Listbox>
  );
};

export default Select;
