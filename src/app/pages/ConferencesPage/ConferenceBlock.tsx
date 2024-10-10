import { ConferenceType } from "../../types/conferenceType.ts";

const ConferenceBlock = ({ conference }: { conference: ConferenceType }) => (
  <>
    <h3>Conference Title: "{conference.title}"</h3>

    <strong>Date:</strong>
    <span> {conference.date}</span>

    <strong>Time:</strong>
    <span> {conference.time}</span>

    <strong>Location:</strong>
    <span>
      {" "}
      {Object.values(conference.location).reduce(
        (acc, value) => acc + ", " + value,
      )}
    </span>

    <strong>Description:</strong>
    <span>{conference.description}</span>

    <strong>Speakers:</strong>
    <ul>
      {conference.speakers.map((speaker) => (
        <li key={speaker.name}>
          {Object.values(speaker).reduce((acc, value) => acc + ", " + value)}
        </li>
      ))}
    </ul>

    <strong>Agenda:</strong>
    <ul>
      {conference.agendas.map((agenda) => (
        <li key={agenda.event}>
          {Object.values(agenda).reduce((acc, value) => acc + ": " + value)}
        </li>
      ))}
    </ul>

    <strong>Registration:</strong>
    <span>{conference.registration.info}</span>
  </>
);

export default ConferenceBlock;
