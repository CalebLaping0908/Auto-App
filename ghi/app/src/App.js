import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListAppointments from './ListAppointments';
import ListSalesLog from './ListSalesLog';
import ListCustomer from './ListCustomer';
import ListSalesPerson from './ListSalesPerson';
import ListAutomobiles from './ListAutomobiles';
import CreateAppointment from './CreateAppointment';
import CreateTechnician from './CreateTechnician';
import ListAutos from './ListAutos';
import ListModels from './ListModels';
import ListManufacturers from './ListManufacturers';
import CreateAutomobile from './CreateAutomobile';
import CreateModel from './CreateModel';
import CreateManufacturer from './CreateManufacturer';
import CreateSalesLog from './CreateSalesLog';
import CreateSalesPerson from './CreateSalesPerson';
import CreateCustomer from './CreateCustomer';
import { useEffect, useState } from 'react';

function App() {

  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const appointmentsResponse = await fetch('http://localhost:8080/api/appointments/');

    if (appointmentsResponse.ok) {
      const appointmentData = await appointmentsResponse.json();

      setAppointments(appointmentData.appointments);
    }
  }

  const [technicians, setTechnicians] = useState([]);

  const getTechnicians = async () => {
    const techniciansResponse = await fetch('http://localhost:8080/api/technicians/');

    if (techniciansResponse.ok) {
      const technicianData = await techniciansResponse.json();

      setTechnicians(technicianData.technicians);
    }
  }

  const [automobiles, setAutomobiles] = useState([]);

  const getAutomobiles = async () => {
    const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');

    if (automobileResponse.ok) {
      const automobileData = await automobileResponse.json();

      setAutomobiles(automobileData.autos);
    }
  }

  const [models, setModels] = useState([]);

  const getModels = async () => {
    const modelResponse = await fetch('http://localhost:8100/api/models/');

    if (modelResponse.ok) {
      const modelData = await modelResponse.json();

      setModels(modelData.models);
    }
  }

  const [manufacturers, setManufacturers] = useState([]);

  const getManufacturers = async () => {
    const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers/');

    if (manufacturerResponse.ok) {
      const manufacturerData = await manufacturerResponse.json();

      setManufacturers(manufacturerData.manufacturers);
    }
  }

  useEffect(() => {
    getAppointments();
    getTechnicians();
    getAutomobiles();
    getModels();
    getManufacturers();
  }, [])

  const [customer, setCustomer] = useState([]);

  const getCustomer = async () => {
    const customerResponse = await fetch('http://localhost:8090/api/customer/');

    if (customerResponse.ok) {
      const customerData = await customerResponse.json();

      setCustomer(customerData.customer);
    }
  }

  const [sales_log, setSalesLog] = useState([]);

  const getSalesLog = async () => {
    const sales_logResponse = await fetch('http://localhost:8090/api/sales_log/');

    if (sales_logResponse.ok) {
      const sale_logData = await sales_logResponse.json();

      setSalesLog(sale_logData.sales_log);
    }
  }

  const [sales_person, setSalesPerson] = useState([]);

  const getSalesPerson = async () => {
    const sales_personResponse = await fetch('http://localhost:8090/api/sales/');

    if (sales_personResponse.ok) {
      const sales_personData = await sales_personResponse.json();

      setSalesPerson(sales_personData.sales_person);
    }
  }

  useEffect(() => {
    getSalesLog();
    getCustomer();
    getSalesPerson();
  }, [])






  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ListManufacturers manufacturers={manufacturers} getManufacturers={getManufacturers} />} />
          <Route path="/create/manufacturer" element={<CreateManufacturer getManufacturers={getManufacturers} />} />
          <Route path="/models" element={<ListModels models={models} getModels={getModels} />} />
          <Route path="/create/model" element={<CreateModel getModels={getModels} />} />
          <Route path="/automobiles" element={<ListAutos automobiles={automobiles} getAutomobiles={getAutomobiles} />} />
          <Route path="/create/automobile" element={<CreateAutomobile getAutomobiles={getAutomobiles} />} />
          <Route path="/appointments" element={<ListAppointments appointments={appointments} getAppointments={getAppointments} setAppointments={setAppointments}/>} />
          <Route path="/create/appointment" element={<CreateAppointment getAppointments={getAppointments} />} />
          <Route path="/create/technician" element={<CreateTechnician getTechnicians={getTechnicians}/>} />
          <Route path="/sales_log" element={<ListSalesLog sales_log={sales_log} getSalesLog={getSalesLog} />} />
          <Route path="/customer" element={<ListCustomer customer={customer} getCustomer={getCustomer} />} />
          <Route path="/sales_person" element={<ListSalesPerson sales_person={sales_person} getSalesPerson={getSalesPerson} />} />
          <Route path="/create/sales_log" element={<CreateSalesLog getSalesLog={getSalesLog}/>} />
          <Route path="/create/sales_person" element={<CreateSalesPerson  getSalesPerson={getSalesPerson} />}  />
          <Route path="/create/customer" element={<CreateCustomer getCustomer={getCustomer}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
