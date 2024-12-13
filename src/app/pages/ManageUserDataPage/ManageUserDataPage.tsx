import { useUserCreate, useUserUpdate } from "../../api/users/queryHooks.ts";
import LoadingSpinner from "../../components/spinners/LoadingSpinner.tsx";
import toast from "react-hot-toast";
import { useState } from "react";
import InputLabel from "../HomePage/InputLabel.tsx";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { UserType } from "../../types/userType.ts";
import { isEmpty } from "lodash";

const ManageUserDataPage = () => {
  const { state } = useLocation() as { state: UserType };

  const { isUserCreating, mutateUserCreate } = useUserCreate();
  const { isUserUpdating, mutateUserUpdate } = useUserUpdate();

  const [username, setUsername] = useState(state.username ?? "");
  const [age, setAge] = useState<number>(state.age ?? 0);
  const [name, setName] = useState(state.name ?? "");
  const [birthDate, setBirthDate] = useState(state.birthDate ?? "");
  const [email, setEmail] = useState(state.email ?? "");

  const isActionButtonDisabled =
    !username.length ||
    !name.length ||
    !age ||
    !email.length ||
    !birthDate.length ||
    !name.length;

  const handleAgeChange = (newAgeAsText: string) => {
    const newAge = !!newAgeAsText ? Number(newAgeAsText) : 0;

    setAge(newAge);
  };

  const handleUserDataChange = async () => {
    try {
      if (isUserCreating || isUserUpdating) {
        return;
      }

      if (isActionButtonDisabled) {
        return;
      }

      if (isEmpty(state)) {
        await mutateUserCreate({
          data: { age, name, username, email, birthDate },
          onSuccess: () => {
            setName("");
            setAge(0);
            setUsername("");
            setEmail("");
            setBirthDate("");

            toast.success(`User created successfully!`);
          },
        });

        return;
      }

      mutateUserUpdate({
        data: { age, name, username, email, birthDate, id: state.id },
        onSuccess: () => {
          setName("");
          setAge(0);
          setUsername("");
          setEmail("");
          setBirthDate("");

          toast.success(`User data changed successfully!`);
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/users">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Create user</Breadcrumb.Item>
      </Breadcrumb>

      <div className={"grid gap-3 justify-items-center"}>
        <InputLabel
          label={"Username"}
          placeholder={"Username"}
          value={username}
          onChange={setUsername}
        />

        <InputLabel
          label={"Name"}
          placeholder={"Name"}
          value={name}
          onChange={setName}
        />

        <InputLabel
          label={"Age"}
          placeholder={"Age"}
          value={age ?? 0}
          onChange={handleAgeChange}
        />

        <InputLabel
          label={"E-mail"}
          placeholder={"user@example.com"}
          value={email}
          onChange={setEmail}
        />

        <InputLabel
          label={"Date of birth"}
          placeholder={"Date of birth"}
          value={birthDate}
          onChange={setBirthDate}
        />
        <Button
          variant="info"
          onClick={handleUserDataChange}
          disabled={isUserCreating || isActionButtonDisabled}
        >
          {isUserCreating ? (
            <div className={"flex"}>
              <LoadingSpinner />
              Processing
            </div>
          ) : isEmpty(state) ? (
            "Create user"
          ) : (
            "Update user data"
          )}
        </Button>

        <Card style={{ width: "18rem" }} className={"mt-4"} bg="info">
          <Card.Img
            variant="top"
            src="https://placehold.co/600x400/EEE/31343C"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>Date of birth: {birthDate}</p>
              <p>E-mail: {email}</p>
              <p>Age: {age}</p>
              <p>Username: {username}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ManageUserDataPage;
