import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

export async function getJobs() {
  const jobsCollection = collection(db, "jobs");
  const resonseData = await getDocs(jobsCollection);

  const jobs = resonseData?.docs?.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return jobs;
}
