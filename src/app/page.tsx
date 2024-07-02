
import CarouselD from "@/components/CarouselDashboard/carouselD";
import Barchart from "@/components/Charts/barchart";
import CardsRadial from "@/components/Charts/cardsRadial";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sensor } from "@/types/sensor";

import { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: 'Datos listos'
}


async function fetchingData() {

  const startDate = new Date('2024-04-01T00:00:00.000Z');
  const endDate = new Date('2024-04-07T23:59:59.999Z');


  const data: Sensor[] = await fetch('https://web-servirce-machine.vercel.app/todo', {
    method: 'GET',
  }).then(res => res.json())


  const filteredData = data.filter(item => {
    const date = new Date(item.todate)
    return date >= startDate && date <= endDate
  })

  // console.log(data);
  return filteredData
}


export default async function Home() {

  const data = await fetchingData()

  return (
    <main className="p-[10px] bg-[#d6d7da]">
      <div className="flex flex-col sm:grid grid-cols-[20%_80%] ">
        <div className="p-5 flex-none bg-white rounded-[20px_20px_0px_0px] sm:rounded-[20px_0px_0px_20px] ">

          <div className="my-2">
            <Select>
              <SelectTrigger>
                <SelectValue defaultValue={'Miraflores'} defaultChecked />
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


        </div>
        <div className="bg-[#f6f6f8]">

          <Tabs defaultValue="Hoy" >
            <TabsList className="flex justify-center m-2">
              <TabsTrigger value="Hoy">Hoy</TabsTrigger>
              <TabsTrigger value="Semana">Semana</TabsTrigger>
            </TabsList>
            <TabsContent value="Hoy">



              <Tabs defaultValue="Temperatura" className="">
                <TabsList>
                  <TabsTrigger value="Temperatura">Temperatura</TabsTrigger>
                  <TabsTrigger value="pm2_5">pm2_5</TabsTrigger>
                  <TabsTrigger value="pm10">PM2 10</TabsTrigger>
                  <TabsTrigger value="pm1">PM2 1</TabsTrigger>
                  <TabsTrigger value="PM100">PM2 100</TabsTrigger>
                </TabsList>
                <TabsContent value="Temperatura">

                  <div className="w-[97%] h-[450px]">
                    <Barchart data={data} categoria="temperature" />
                  </div>
                </TabsContent>
                <TabsContent value="pm2_5">
                  <div className="w-[97%] h-[450px]">
                    <Barchart data={data} categoria="pm2_5" />
                  </div>
                </TabsContent>
                <TabsContent value="pm10">
                  <div className="w-[97%] h-[450px]">
                    <Barchart data={data} categoria="PM10_ug_m3" />
                  </div>
                </TabsContent>
                <TabsContent value="pm1">
                  <div className="w-[97%] h-[450px]">
                    <Barchart data={data} categoria="PM1_ug_m3" />
                  </div>
                </TabsContent>
                <TabsContent value="PM100">
                  <div className="w-[97%] h-[450px]">
                    <Barchart data={data} categoria="PM100_ug_m3" />
                  </div>
                </TabsContent>
              </Tabs>


            </TabsContent>
            <TabsContent value="Semana">Change your PM2_10 here.</TabsContent>
          </Tabs>

        </div>
      </div>

    </main>
  );
}

