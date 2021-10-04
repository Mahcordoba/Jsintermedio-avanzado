const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  //Solucion de la comunidad 
  const challenge1 = calendars.primaryCalendar.flatMap(calendar =>calendar.startDate);
  const challenge3 = calendars.secondaryCalendar.flatMap(calendar =>calendar.startDate);
  console.log(challenge1.concat(challenge3));

  //Solucion de la clase 
  const rta3 = Object.values(calendars).flatMap(item =>{
      return item.map(date => date.startDate)
  })
  console.log(rta3)