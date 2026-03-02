'use server'


export type Month = 'ENE'|'FEB'|'MAR'|'ABR'|'MAY'|'JUN'|'JUL'|'AGO'|'SET'|'OCT'|'NOV'|'DIC'
export type MemberValue = [number,number,number|"",string,string,string]
export type MonthData = MemberValue[]
export type Data = Record<Month,MonthData>

interface Response {
  success: boolean;
  msg?: string;
  ans?: Data;
}


export const getData = async () => {
  const {API,TYPE,SEDEID,EMAIL} = process.env
  const url = `${API}?type=${TYPE}&sedeId=${SEDEID}&email=${EMAIL}`

 try{
  const goodRes:Promise<Response> = (await fetch(url,{
    next: { revalidate:86400*3 } // validarlo cada dia
  })).json()

  return (await goodRes)
 }catch(err){
    const badRes:Response = {success: false}
  return badRes
 }
}
