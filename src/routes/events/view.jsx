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

				const month = Intl.DateTimeFormat("es", { month: "long" }).format(
					new Date(date.month)
				);

				return {
					key: crypto.randomUUID(),
					title: event.title,
					description: DECODER.decode(event.description),
					year: date.year,
					month: month.charAt(0).toUpperCase() + month.slice(1),
					day: date.day,
					hour: `${date.hour}:${date.minutes}`,
					franchise: event.categories[0].slug,
				};
			});

			setEvents(_);
		}

		retrieveData();
	}, []);

	return (
		<section>
			{events.map(({ key, title, year, month, day, hour, franchise }) => {
				return (
					<Event
						key={key}
						title={title}
						day={day}
						month={month}
						year={year}
						hour={hour}
						franchise={franchise}
					/>
				);
			})}
		</section>
	);
};

export default View;
