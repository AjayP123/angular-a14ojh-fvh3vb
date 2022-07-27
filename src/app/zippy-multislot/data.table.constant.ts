// tslint:disable-next-line: file-header
export const dataTable = {
  ReportInformation: {
    ReportName: 'My EvSummary report',
    ReportType: 'EvSummary',
    CreatedDateTime: '2022-07-25T11:43:09.1182271Z',
    ReportRequestedBy: 3465952,
    AccountId: 1125264,
  },
  ReportContent: {
    Sections: [
      {
        Header: {
          ItemName: 'QATest_GenX_10',
          ItemType: 'Vehicle',
        },
        Tables: [
          {
            Idx: 0,
            ItemName: 'Takeshi Driver',
            Type: 'Driver',
            StartDate: '06/18/2022',
            EndDate: '06/18/2022',
            StartTime: '10:00 AM',
            EndTime: '10:15 AM',
            BatteryStart: 50,
            BatteryEnd: 88,
            TotalChargingDuration: 900,
            ChargingLocation: 'My neighbourhood',
            DistanceSinceLastCharged: 48,
            IsChargeInProgressStartDate: false,
            IsChargeInProgressEndDate: false,
          },
          {
            Idx: 1,
            ItemName: null,
            Type: 'UnKnownDriver',
            StartDate: '06/18/2022',
            EndDate: '06/18/2022',
            StartTime: '07:59 PM',
            EndTime: '11:59 PM',
            BatteryStart: 80,
            BatteryEnd: 99,
            TotalChargingDuration: 68400,
            ChargingLocation: 'My neighbourhood',
            DistanceSinceLastCharged: 23,
            IsChargeInProgressStartDate: false,
            IsChargeInProgressEndDate: true,
          },
        ],
        Footer: [
          {
            Type: 'Total Charging Duration',
            Value: '69300',
          },
          {
            Type: 'Charging Location',
            Value: '1',
          },
          {
            Type: 'Distance Since Last Charge',
            Value: '71',
          },
          {
            Type: 'Assigned Driver',
            Value: '1',
          },
        ],
      },
    ],
    ColumnHeadings: {
      MainItemName: 'Vehicle',
      SecondaryItemName: 'Assigned Driver',
      StartChargeDate: 'Start Date',
      EndChargeDate: 'End Date',
      StartChargeLevel: 'Battery Start',
      EndChargeLevel: 'Battery End',
      TotalChargeDuration: 'Total Charging Duration',
      DistanceSinceLastCharge: 'Distance Since Last Charge',
      ChargingLocation: 'Charging Location',
    },
  },
  ReportSettings: {
    ReportStart: '2022-06-12T23:00:00',
    ReportEnd: '2022-06-19T22:59:59',
    Centricity: 'VehicleCentricity',
    Vehicles: 5,
    Drivers: 0,
  },
};
