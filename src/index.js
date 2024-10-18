
import { BigQuery } from '@google-cloud/bigquery';
// const {BigQuery} = require('@google-cloud/bigquery');

export const main = (jobId = 'existing-job-id') => {
    // [START bigquery_get_job]
    // Import the Google Cloud client library
    const bigquery = new BigQuery();
  
    async function getJob() {
      // Get job properties.
  
      /**
       * TODO(developer): Uncomment the following lines before running the sample.
       */
      // const jobId = "existing-job-id";
  
      // Create a job reference
      const job = bigquery.job(jobId);
  
      // Retrieve job
      const [jobResult] = await job.get();
  
      console.log(jobResult.metadata.jobReference);
    }
    // [END bigquery_get_job]
    getJob();
  }
