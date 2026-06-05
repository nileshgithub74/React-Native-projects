export type RootStackParamList = {
  onboarding: undefined;
  login: undefined;
  signup: undefined;
  otp: undefined;
  home: undefined;
  search: undefined;
  doctorList: undefined;
  doctorDetail: { doctor: any };
  appointment: { doctor: any };
  appointmentSchedule: { doctor: any; patientInfo: any };
  appointmentSuccess: { doctor: any; appointmentDate: string; appointmentTime: string };
  appointmentDetail: { appointment: any };
  videoCall: { doctor: any; appointmentTime: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
