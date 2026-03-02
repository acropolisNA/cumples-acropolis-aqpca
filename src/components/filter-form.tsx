'use client'

import { Data, Month } from "@/actions/get-info"
import { useCumplesStore } from "@/store/cumples"
import { ChangeEvent, useEffect } from "react"

interface Props {
  data:Data
}

export const FilterForm = ({data}:Props) => {

  const {setData,setCurrent,} = useCumplesStore(st => st)
  
  useEffect(() => {
    setData(data)
  }, []);

  const handleChange = ( e:ChangeEvent<HTMLSelectElement> ) => {
    const month = e.target.value as Month
    setCurrent(month)
  }
  
  return (
    <section
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-8"
        data-purpose="filter-controls">
        <div className="flex justify-between">

          <div className="flex flex-col mb-1">
            <label
              className="text-lg font-semibold text-gray-800 tracking-tight"
              htmlFor="month-select">
                Filtrar por Mes
              </label>
            <p className="text-xs md:text-base text-gray-500">
              Selecciona un mes para ver los cumpleañeros
            </p>
          </div>

          <div className="relative w-40">
            <select
              className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm transition-all duration-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 sm:text-sm appearance-none bg-white"
              id="month-select"
              onChange={(e)=>handleChange(e)}
            >
              <option value="" disabled selected>--Mes--</option>
              <option value="ENE">Enero</option>
              <option value="FEB">Febrero</option>
              <option value="MAR">Marzo</option>
              <option value="ABR">Abril</option>
              <option value="MAY">Mayo</option>
              <option value="JUN">Junio</option>
              <option value="JUL">Julio</option>
              <option value="AGO">Agosto</option>
              <option value="SET">Septiembre</option>
              <option value="OCT">Octubre</option>
              <option value="NOV">Noviembre</option>
              <option value="DIC">Diciembre</option>
            </select>
            <div
              className="pointer-events-none absolute inset-y-0 -top-1 md:-top-3 right-0 flex items-center px-3 text-gray-500"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
  )
}
