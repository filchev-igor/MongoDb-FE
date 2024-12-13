import LoadingSpinner from "../../components/spinners/LoadingSpinner.tsx";

const ConferenceDeleteButton = ({
  onClick,
  isDeleting,
}: {
  onClick: () => void;
  isDeleting: boolean;
}) => {
  return (
    <div className={"mb-3"}>
      <button
        type={"button"}
        onClick={onClick}
        className={"bg-red-300 hover:bg-red-600 transition mt-3"}
      >
        {!isDeleting ? (
          "Delete conference"
        ) : (
          <div className={"flex"}>
            <LoadingSpinner /> Deleting the conference
          </div>
        )}
      </button>
    </div>
  );
};

export default ConferenceDeleteButton;
