import { Data, Month, MonthData } from "@/actions/get-info";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State{
  data: Data | null
  current: MonthData
  month:Month | ""
  setCurrent: (month:Month) => void
  setData: (data:Data) => void
}

export const useCumplesStore = create<State>()(
  persist(
    (set,get) => ({
      data:null ,
      month:'' ,
      
      current: [],

      setCurrent: (month:Month) => {
      
        const data = get().data
        if(!data) return;
        
        const current = data[month]
        set({current,month})
      },

      setData: (data:Data) => {
        if(!data) return;

        set({data})
      }


    }),
    {
      name: 'cumples-info',
    }
  )
)