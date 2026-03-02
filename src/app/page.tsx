import { getData } from "@/actions/get-info";
import { FilterForm, Loading, TableMembers } from "@/components";

export default async function Home() {

  const {success,ans} = await getData()

  if(!success || !ans) return <Loading/>
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-250 h-full">
      
      <FilterForm data={ans}/>

      <TableMembers/>

    </div>
  );
}
