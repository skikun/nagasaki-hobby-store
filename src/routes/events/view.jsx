import { useState, useEffect } from "react";

import EVENTS from "../../api/events/api";

import * as DECODER from "../../utils/DECODER";

import Event from "../../components/event/component";

import "./style.css";

const View = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		async function retrieveData() {
			const _events = await EVENTS.get();

			const _ = _events.events.map((event) => {
				const date = event.utc_start_date_details;

				return {
					key: crypto.randomUUID(),
					title: event.title,
					description: DECODER.decode(event.description),
					year: date.year,
					month: date.month,
					day: date.day,
					hour: `${date.hour}:${date.minutes}`,
				};
			});

			setEvents(_);
		}

		retrieveData();
	}, []);

	return (
		<section>
			{events.map(({ key, title, description, year, month, day, hour }) => {
				return (
					<Event
						key={key}
						title={title}
						description={description}
						day={day}
						month={month}
						year={year}
						hour={hour}
					/>
				);
			})}
		</section>
	);
};

export default View;
