import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
 margin-bottom: 1rem;
`;

const AppointmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 8px  #669999; 
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
  align-items: center;
  &:first-child {
    background: #4caf50;
    color: white;

    &:hover {
        transition: background-color 0.2s ease-in-out;
        background: darkgreen;
      }
  }

  &:last-child {
    background-color: #f44336;
    color: white;

    &:hover {
        transition: background-color 0.2s ease-in-out;
        background: darkred;
      }
  }

  
`;

const SpecialistAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('js/data.json'); // Replace with your API endpoint
      setAppointments(response.data.Profiles);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleAccept = async (appointmentId) => {
    try {
      await axios.put(`/api/appointments/${appointmentId}/accept`); // Replace with your API endpoint
      fetchAppointments();
    } catch (error) {
      console.error('Error accepting appointment:', error);
    }
  };

  const handleDecline = async (appointmentId) => {
    try {
      await axios.put(`/api/appointments/${appointmentId}/decline`); // Replace with your API endpoint
      fetchAppointments();
    } catch (error) {
      console.error('Error declining appointment:', error);
    }
  };

  return (
    <PageContainer>
      <Title>Doctor Appointment Page</Title>
      <AppointmentTable>
        <thead>
          <tr>
            <TableHeader>Patient Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.firstName} {appointment.lastName}</TableCell>
              <TableCell>{appointment.dob}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>
                <Button onClick={() => handleAccept(appointment.id)}>Accept</Button>
                <Button onClick={() => handleDecline(appointment.id)}>Decline</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </AppointmentTable>
    </PageContainer>
  );
};

 
 export default SpecialistAppointments