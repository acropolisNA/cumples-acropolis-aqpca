'use client'

import { MemberValue } from "@/actions/get-info";
import { useCumplesStore } from "@/store/cumples"



export const TableMembers = () => {


  const {current:currentData,month} = useCumplesStore(st => st)

  if(!currentData) return null;

  return (
    <section
        className="bg-white rounded-xl shadow-md border border-gray-200"
        data-purpose="data-table-wrapper"
      >
        <div className="">
          <table
            className="w-full birthday-table text-left border-collapse overflow-hidden rounded-t-xl"
            id="birthday-data-table"
          >
            <thead className="table-header-bg text-white uppercase rounded-t-2xl sticky top-0">
              <tr className="bg-header-bg rounded-t-2xl">
                <th className=" text-center">Día</th>
                <th className="">Teléfono</th>
                <th className=" text-center">Grupo</th>
                <th className="text-center">Nombres</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">

              {
                currentData.map( (row,ix) => <RowTable key={'row_table_'+ix} data={row}/>)
              }
             
            </tbody>
          </table>
        </div>

        <div
          className="bg-gray-50 px-6 py-4   flex justify-between items-center text-sm text-gray-500 rounded-b-xl"
        >
          <p>Mostrando {currentData.length} resultados para el mes de <strong>{month}</strong></p>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 mr-1 text-pink-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              ></path></svg>
              <span>Sede Arequipa - Cayma</span>
          </div>
        </div>
      </section>

  )
}



interface RowTableProps{
  data:MemberValue
}

const groupColors = [
  '',        
  '1D4ED8',  // 1. Azul Eléctrico (Frío)
  'C2410C',  // 2. Naranja Enérgico (Cálido)
  '15803D',  // 3. Verde Trébol (Natural)
  'BE185D',  // 4. Rosa Fucsia (Brillante)
  '0E7490',  // 5. Turquesa Intenso (Frío Medio)
  'A16207',  // 6. Amarillo Ámbar (Cálido Tierra)
  '7E22CE',  // 7. Púrpura Real (Vibrante)
  '334155',  // 8. Gris Pizarra (Neutro Oscuro)
  'B91C1C',  // 9. Rojo Carmesí (Fuerte)
  '0369A1',  // 10. Azul Cielo (Claro)
  '166534',  // 11. Verde Bosque
  '4338CA',  // 12. Índigo Profundo
  '92400E',  // 13. Ocre Mango
  'A21CAF',  // 14. Magenta Vivo
  '047857'   // 15. Esmeralda
];

const RowTable = ({data}:RowTableProps) => {
  const [day,age,phone,group,lastName,name] = data

  const numberGrup = +group.slice(1)
  const color = groupColors[numberGrup]
  
  return (
     <tr className="hover:bg-main-bg">
        <td className="text-center font-bold text-teal-700">{day}</td>
        <td>
          <a className="text-blue-600 hover:underline" target="_blank" href={`https://wa.me/51${phone}`}
            >{phone}</a>
        </td>
        <td className="text-center">
          <span
            className="px-2 py-1 rounded-full text-xs font-semibold text-white"
            style={{backgroundColor:`#${color}90`}}
          >
            {group}
          </span>
        </td>
        <td className="flex justify-between flex-col md:flex-row">
          <p>{lastName}, {name}</p>
          <p className="italic">Cumple: <span className="font-bold">{age} años</span></p>
        </td>
      </tr>
  )
}