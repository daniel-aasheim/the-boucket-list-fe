import axios from "axios";
import { BoucketItem } from "../types/types";
import { API_BASE_URL } from "./apiBaseUrl";

// Interfaces for API parameters
interface CreateItemParams {
  name: string;
  description: string;
  boucketListId: number | null;
}

interface FetchItemParams {
  id: number;
}

interface UpdateItemParams {
  id: number;
  name: string;
  description: string;
  boucketListId: number | null;
}

interface DeleteItemParams {
  id: number;
}

// API functions
export const createItem = async ({
  name,
  description,
  boucketListId,
}: CreateItemParams): Promise<BoucketItem> => {
  const response = await axios.post(`${API_BASE_URL}/api/boucket-items/new`, {
    name,
    description,
    boucketListId,
  });
  return response.data;
};

export const fetchItem = async ({ id }: FetchItemParams): Promise<BoucketItem> => {
  const response = await axios.get(`${API_BASE_URL}/api/boucket-items/${id}`);
  return response.data;
};

export const fetchAllItems = async (): Promise<BoucketItem[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/boucket-items/all`);
  return response.data;
};

export const updateItem = async ({
  id,
  name,
  description,
  boucketListId,
}: UpdateItemParams): Promise<BoucketItem> => {
  const response = await axios.put(`${API_BASE_URL}/api/boucket-items/${id}`, {
    name,
    description,
    boucketListId,
  });
  return response.data;
};

export const deleteItem = async ({ id }: DeleteItemParams): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/api/boucket-items/${id}`);
};