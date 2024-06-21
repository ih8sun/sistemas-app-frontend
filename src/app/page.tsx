"use client"
import CarouselD from "@/components/CarouselDashboard/carouselD";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function Home() {
  return (
    <main className="p-[10px] bg-[#d6d7da]">
      <div className="flex flex-col sm:grid grid-cols-[20%_80%] ">
        <section className="p-5 bg-white rounded-[20px_20px_0px_0px] sm:rounded-[20px_0px_0px_20px] ">

          <div className="my-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Miraflores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Miraflores">Miraflores</SelectItem>
                <SelectItem disabled value="San Isidro">San Isidro</SelectItem>
                <SelectItem disabled value="Barranco">Barranco</SelectItem>
                <SelectItem disabled value="Chorrillos">Chorrillos</SelectItem>
                <SelectItem disabled value="Surco">Surco</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center">
            <img className="w-[150px]" src="https://cdn-icons-png.flaticon.com/512/10127/10127236.png" alt="IA" />
          </div>

          <div>
            <h2 className="text-7xl">12°C</h2>
            <br />
            <h5>&ensp; {new Date().toDateString()}</h5>
          </div>

          <hr className="my-5" />

          <div>
            <CarouselD />
          </div>

        </section>
        <section className="bg-[#f6f6f8]">

          <Tabs defaultValue="account" >
            <TabsList className="flex justify-center m-2">
              <TabsTrigger value="Hoy">Hoy</TabsTrigger>
              <TabsTrigger value="Semana">Semana</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>

        </section>
      </div>
    </main>
  );
}
