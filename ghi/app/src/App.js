import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListAppointments from './ListAppointments';
import CreateAppointment from './CreateAppointment';
import CreateTechnician from './CreateTechnician';
import ListAutos from './ListAutos';
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

  useEffect(() => {
    getAppointments();
    getTechnicians();
    getAutomobiles();
  }, [])






  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobiles" element={<ListAutos automobiles={automobiles} getAutomobiles={getAutomobiles} />} />
          <Route path="/appointments" element={<ListAppointments appointments={appointments} getAppointments={getAppointments} setAppointments={setAppointments}/>} />
          <Route path="/create/appointment" element={<CreateAppointment getAppointments={getAppointments} getTechnicians={getTechnicians}/>} />
          <Route path="/create/technician" element={<CreateTechnician getTechnicians={getTechnicians}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
