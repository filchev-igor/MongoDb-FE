import "./styles.css";

const SettingsPage = () => {
  //const { userData } = UseUserContext();

  return null;

  /*
  const { mutateUserUpdate, isUserUpdating } = useUserUpdate();

  const handleBackgroundClassNameChange = (newBackgroundClassName: string) => {
    if (isUserUpdating) {
      return;
    }

    if (newBackgroundClassName === userData?.backgroundClassName) {
      return;
    }

    mutateUserUpdate({
      backgroundClassName: newBackgroundClassName,
      onSuccess: () => {},
    });
  };

   */

  /*
  return (
    <div className={"grid-block grid-block-1 sm:grid-block-2"}>
      <div className={"sm:col-span-2"}>
        <h1 className={"font-light text-center"}>Background style</h1>
      </div>

      {Object.values(BACKGROUND_CLASS_NAMES).map((value) => {
        const capitalizedClassName = capitalizeFirstLetter(value);
        const newBackgroundClassName = getDashedText(value);

        return (
          <div key={value} className={"text-center"}>
            <button
              type={"button"}
              onClick={() =>
                handleBackgroundClassNameChange(newBackgroundClassName)
              }
              className={
                "border border-purple-600 text-purple-600 rounded-none hover:bg-purple-600 hover:text-white w-48 bg-white"
              }
            >
              {capitalizedClassName}
            </button>
          </div>
        );
      })}
    </div>
  );
  
   */
};

export default SettingsPage;
