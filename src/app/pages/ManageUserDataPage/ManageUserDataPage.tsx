import { useUserCreate, useUserUpdate } from "../../api/users/queryHooks.ts";
import LoadingSpinner from "../../components/spinners/LoadingSpinner.tsx";
import toast from "react-hot-toast";
import { useState } from "react";
import InputLabel from "../HomePage/InputLabel.tsx";
import { Breadcrumb, Button, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { UserType } from "../../types/userType.ts";
import { isEmpty } from "lodash";
import { USER_SCHEMA } from "./constants.ts";
import { PATH_NAMES } from "../../modules/router/constants.ts";

const ManageUserDataPage = () => {
  const { state } = useLocation() as { state: UserType };
  const navigate = useNavigate();

  const { isUserCreating, mutateUserCreate } = useUserCreate();
  const { isUserUpdating, mutateUserUpdate } = useUserUpdate();

  const [username, setUsername] = useState(state?.username ?? "");
  const [age, setAge] = useState<number>(state?.age ?? 0);
  const [name, setName] = useState(state?.name ?? "");
  const [birthDate, setBirthDate] = useState(state?.birthDate ?? "");
  const [email, setEmail] = useState(state?.email ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isActionButtonDisabled =
    !username.length ||
    !name.length ||
    !age ||
    !email.length ||
    !birthDate.length;

  const handleAgeChange = (newAgeAsText: string) => {
    const newAge = !!newAgeAsText ? Number(newAgeAsText) : 0;
    setAge(newAge);
  };

  const areUserDataValid = async () => {
    try {
      await USER_SCHEMA.validate(
        { username, name, age, email, birthDate },
        { abortEarly: false }, // Gather all validation errors
      );
      setErrors({}); // Clear errors if validation passes

      return true;
    } catch (validationError) {
      if (validationError.inner) {
        const validationErrors: Record<string, string> = {};

        validationError.inner.forEach((err: any) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });

        setErrors(validationErrors); // Set validation errors
      }

      return false;
    }
  };

  const handleUserDataChange = async () => {
    try {
      if (isUserCreating || isUserUpdating || isActionButtonDisabled) return;

      const isValid = await areUserDataValid();

      if (!isValid) {
        toast.error("Please fix validation errors before proceeding.");
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
          navigate(PATH_NAMES.usersPage);
          toast.success(`User data changed successfully!`);
        },
      });
    } catch (error) {
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
          error={errors.username}
        />

        <InputLabel
          label={"Name"}
          placeholder={"Name"}
          value={name}
          onChange={setName}
          error={errors.name}
        />

        <InputLabel
          label={"Age"}
          placeholder={"Age"}
          value={age ?? 0}
          onChange={handleAgeChange}
          error={errors.age}
        />

        <InputLabel
          label={"E-mail"}
          placeholder={"user@example.com"}
          value={email}
          onChange={setEmail}
          error={errors.email}
        />

        <InputLabel
          label={"Date of birth"}
          placeholder={"Date of birth"}
          value={birthDate}
          onChange={setBirthDate}
          error={errors.birthDate}
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
            <Card.Title>{name}</Card.Title>{" "}
          </Card.Body>

          <ListGroup variant="flush">
            <ListGroup.Item>Date of birth: {birthDate}</ListGroup.Item>
            <ListGroup.Item>E-mail: {email}</ListGroup.Item>
            <ListGroup.Item>Age: {age}</ListGroup.Item>
            <ListGroup.Item> Username: {username}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default ManageUserDataPage;
