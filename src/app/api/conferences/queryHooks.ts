import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createConference,
  deleteConference,
  getConferencesList,
  updateConferenceParticipants,
} from "./api.ts";
import { ConferenceType } from "../../types/conferenceType.ts";
import { CONFERENCES_LIST_QUERY_KEY } from "./constants.ts";
import useUserContext from "../../hooks/useUserContext.ts";
import { USER_QUERY_KEY } from "../users/constants.ts";

export const useConferencesList = () => {
  const { data, isLoading } = useQuery(
    [CONFERENCES_LIST_QUERY_KEY],
    () => getConferencesList(),
    { onSettled: () => {} },
  );

  return { conferencesListData: data, isConferencesListDataLoading: isLoading };
};

export const useConferenceCreate = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    ({ data }: { data: ConferenceType; onSuccess: () => void }) =>
      createConference(data),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([CONFERENCES_LIST_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return {
    mutateConferenceCreate: mutate,
    isConferenceCreating: isLoading,
  };
};

export const useConferenceParticipantsUpdate = () => {
  const queryClient = useQueryClient();

  const { userData } = useUserContext();

  const { mutate, isLoading } = useMutation(
    ({ conferenceId }: { conferenceId: number; onSuccess: () => void }) =>
      updateConferenceParticipants(conferenceId, userData?.id ?? 0),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([CONFERENCES_LIST_QUERY_KEY]);
        await queryClient.invalidateQueries([USER_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return {
    mutateConferenceParticipantsUpdate: mutate,
    isConferenceParticipantsUpdating: isLoading,
  };
};

export const useConferenceDelete = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    ({ conferenceId }: { conferenceId: number; onSuccess: () => void }) =>
      deleteConference(conferenceId),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([CONFERENCES_LIST_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return {
    mutateConferenceDelete: mutate,
    isConferenceDeleting: isLoading,
  };
};
