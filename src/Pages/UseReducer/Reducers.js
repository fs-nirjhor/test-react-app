export const patientInitialState = { 
	patients: [] 
};

export const patientReducer = (state, action) => {
  switch (action.type) {
    case "ADMIT_PATIENT":
      const newPatient = { id: action.id, name: action.name };
      const allPatient = [...state.patients, newPatient];
      return { patients: allPatient };
    case "DISCHARGE_PATIENT":
      const remainPatient = state.patients.filter(
        (patient) => patient.name !== action.name
      );
      return { patients: remainPatient };
    default:
      return state;
  }
};
