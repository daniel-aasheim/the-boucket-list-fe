import axios from "axios";
import { BoucketList } from "../types/types";
import { API_BASE_URL } from "./apiBaseUrl";

// Interfaces for API parameters
interface CreateListParams {
  name: string;
  description: string;
}

interface FetchListParams {
  id: number | null;
}

interface UpdateListParams {
  id: number;
  name: string;
  description: string;
}

interface DeleteListParams {
  id: number;
}

// API functions
export const createList = async ({
  name,
  description,
}: CreateListParams): Promise<BoucketList> => {
  const response = await axios.post(`${API_BASE_URL}/api/boucket-lists/new`, {
    name,
    description,
  });
  return response.data;
};

export const fetchList = async ({ id }: FetchListParams): Promise<BoucketList> => {
  const response = await axios.get(`${API_BASE_URL}/api/boucket-lists/${id}`);
  return response.data;
};

export const fetchAllLists = async (): Promise<BoucketList[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/boucket-lists/all`);
  return response.data;
};

export const updateList = async ({
  id,
  name,
  description,
}: UpdateListParams): Promise<BoucketList> => {
  const response = await axios.put(`${API_BASE_URL}/api/boucket-lists/${id}`, {
    name,
    description,
  });
  return response.data;
};

export const deleteList = async ({ id }: DeleteListParams): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/api/boucket-lists/${id}`);
};