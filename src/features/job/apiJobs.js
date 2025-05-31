import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const jobsCollection = collection(db, "jobs");

export async function getJobs() {
  const responseData = await getDocs(jobsCollection);

  const jobs = responseData?.docs?.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return jobs;
}

export async function createNewJob(data) {
  await addDoc(jobsCollection, data);
  return null;
}
