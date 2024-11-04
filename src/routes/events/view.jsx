import "./style.css";

const events = [
  {
    title: "Gran apertura del torneo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Diciembre 8 del 2024",
    place: "Calle 8va #11E-90, Cabecera",
    hour: "18:00 PM",
    key: crypto.randomUUID(),
  },
  {
    title: "Campeonato nacional de One Piece",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Diciembre 8 del 2024",
    place: "Calle 8va #11E-90, Cabecera",
    hour: "18:00 PM",
    key: crypto.randomUUID(),
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Diciembre 8 del 2024",
    place: "Calle 8va #11E-90, Cabecera",
    hour: "18:00 PM",
    key: crypto.randomUUID(),
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Diciembre 8 del 2024",
    place: "Calle 8va #11E-90, Cabecera",
    hour: "18:00 PM",
    key: crypto.randomUUID(),
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Diciembre 8 del 2024",
    place: "Calle 8va #11E-90, Cabecera",
    hour: "18:00 PM",
    key: crypto.randomUUID(),
  },
];

const View = () => {
  return (
    <section>
      {events.map(({ key, title, description, date, place, hour }) => {
        return (
          <div key={key} className="event">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
              {date}, {place}¨- {hour}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default View;
