from openai import OpenAI
import time
import os
from dotenv import load_dotenv

# Load the .env file and set up environment variables
load_dotenv()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Path to the JSONL file with the fine-tuning data
dataset_path = "lesson_plans.jsonl"

# Step 1: Upload the file for fine-tuning
print("Uploading file for fine-tuning...")
with open(dataset_path, "rb") as f:
    file_response = client.files.create(
        file=f,
        purpose="fine-tune"
    )
file_id = file_response.id  # Corrected to use attribute access
print(f"File uploaded successfully. File ID: {file_id}")

# Step 2: Create the fine-tuning job
fine_tune_response = client.fine_tuning.jobs.create(
    training_file=file_id,
    model="gpt-4o-mini-2024-07-18"  # Replace with the correct model name based on OpenAI's supported models
)
fine_tune_job_id = fine_tune_response.id  # Corrected to use attribute access
print(f"Fine-tuning job created. Job ID: {fine_tune_job_id}")

# Step 3: Monitor the fine-tuning job status
print("Monitoring the fine-tuning job status. This may take some time...")
while True:
    job_status = client.fine_tuning.jobs.retrieve(fine_tune_job_id).status  # Corrected to use attribute access
    print(f"Current job status: {job_status}")
    if job_status in ["succeeded", "failed"]:
        break
    time.sleep(60)  # Check every 60 seconds

# Step 4: Retrieve the fine-tuned model ID if the job succeeded
if job_status == "succeeded":
    fine_tune_details = client.fine_tuning.jobs.retrieve(fine_tune_job_id)
    fine_tuned_model_id = fine_tune_details.fine_tuned_model  # Corrected to use attribute access
    print(f"Fine-tuning completed successfully. Model ID: {fine_tuned_model_id}")
else:
    print("Fine-tuning job failed.")

# Step 5: Use the fine-tuned model (if successful) for inference
if job_status == "succeeded":
    # Example request using the fine-tuned model
    completion = client.chat.completions.create(
        model=fine_tuned_model_id,  # Replace with the fine-tuned model ID
        messages=[
            {"role": "system", "content": "You are a helpful assistant for educational lesson planning."},
            {"role": "user", "content": "Generate a lesson plan for Grade 4, Math, Geometry: Lines, Angles, and Shapes"}
        ]
    )
    print("Response from fine-tuned model:")
    print(completion.choices[0].message["content"])
