Automating Data Loading from Google Cloud Storage to BigQuery </br></br>
In thisproject we showcase the process of automating the transfer of data from Google Cloud Storage to BigQuery. The automation is achieved through the utilization of Cloud Functions, demonstrating step-by-step how this setup streamlines and orchestrates the data loading process seamlessly between these Google Cloud services.</br>

Steps:</br></br>
-
* Using chat GPT to generate user data as csv file.
+ Creation of buckets for temporary files, metadata, and user data.
+ Creation of Big Query dataset and table.
+ Creating a Dataflow job using 'Text file Cloud Storage to Big Query.'
+ We have to load 'user defined function' and schema to metadata for Dataflow job creation.
+ Testing the job. (Screenshot attached)
+ To automate the entire process, we have created a cloud function which triggers when the data is loaded in cloud storage.

![project architecture](https://github.com/karan8891/gcs-to-bq-cloud_function-dataflow/blob/master/Screenshots/Architechture%20Diagram.jpg)
