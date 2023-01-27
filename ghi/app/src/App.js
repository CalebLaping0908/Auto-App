import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListAppointments from './ListAppointments';
import ListSalesLog from './ListSalesLog';
import ListCustomer from './ListCustomer';
import ListSalesPerson from './ListSalesPerson';
import ListAutomobiles from './ListAutomobiles';
import CreateAppointment from './CreateAppointment';
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

  useEffect(() => {
    getAppointments();
    getTechnicians();
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

  const [automobiles, setAutomobiles] = useState([]);

  const getAutomobiles = async () => {
    const automobilesResponse = await fetch('http://localhost:8100/api/automobiles/');

    if (automobilesResponse.ok) {
      const automobilesData = await automobilesResponse.json();

      setAutomobiles(automobilesData.autos);
    }
  }

  useEffect(() => {
    getSalesLog();
    getCustomer();
    getSalesPerson();
    getAutomobiles();
  }, [])






  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<ListAppointments appointments={appointments} getAppointments={getAppointments} />} />
          <Route path="/sales_log" element={<ListSalesLog sales_log={sales_log} getSalesLog={getSalesLog} />} />
          <Route path="/customer" element={<ListCustomer customer={customer} getCustomer={getCustomer} />} />
          <Route path="/sales_person" element={<ListSalesPerson sales_person={sales_person} getSalesPerson={getSalesPerson} />} />
          <Route path="/automobiles" element={<ListAutomobiles automobiles={automobiles} getAutomobiles={getAutomobiles} />} />
          <Route path="/create/appointment" element={<CreateAppointment getAppointments={getAppointments} getTechnicians={getTechnicians}/>} />
          <Route path="/create/sales_log" element={<CreateSalesLog automobiles={automobiles} salesPerson={sales_person} customer={customer} setAutomobiles={setAutomobiles} setSalesPerson={setSalesPerson} setCustomer={setCustomer} getSalesLog={getSalesLog}/>} />
          <Route path="/create/sales_person" element={<CreateSalesPerson  getSalesPerson={getSalesPerson} />}  />
          <Route path="/create/customer" element={<CreateCustomer getCustomer={getCustomer}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
