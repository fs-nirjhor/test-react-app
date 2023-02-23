import { useReducer, useRef } from "react";
import { patientReducer, patientInitialState } from "./Reducers";

const PatientManagement = () => {
  const patientRef = useRef();
  const [state, dispatch] = useReducer(patientReducer, patientInitialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADMIT_PATIENT", name: patientRef.current.value, id: state.patients.length });
    patientRef.current.value = "";
  };
  return (
    <div>
      <h3>Total Patient: {state.patients.length}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="patient" placeholder="Add Patient" ref={patientRef} />
      </form>
      <ul>
      {
      	state.patients.map((patient) => <li key={patient.id} onClick = { () => dispatch({type: "DISCHARGE_PATIENT", name: patient.name}) }
      		>{patient.name}</li> )
      }
      </ul>
    </div>
  );
};

export default PatientManagement;
