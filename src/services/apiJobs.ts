import {
  collection,
  getDocs,
  addDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../src/firebase";

const jobsCollection = collection(db, "jobs");

export type Job = {
  id?: string;
  title: string;
  companyName: string;
  link: string;
  companyUrl: string;
  locationType: string;
  type: string;
  date: string;
  skills?: string[];
};

export async function getJobs(): Promise<Job[]> {
  const responseData = await getDocs(jobsCollection);

  const jobs = responseData?.docs?.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
  })) as Job[];

  return jobs;
}

export async function createNewJob(data: Job): Promise<void> {
  await addDoc(jobsCollection, data);
}
