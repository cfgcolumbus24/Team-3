#!/bin/bash

# List of Python scripts for generating lesson plans from Grade 1 to Grade 8
scripts=("generateG1.py" "generateG2.py" "generateG3.py" "generateG4.py" "generateG5.py" "generateG6.py" "generateG7.py" "generateG8.py")

# Loop through each script and run it
for script in "${scripts[@]}"; do
    echo "Running $script..."
    python3 "$script"
    if [ $? -ne 0 ]; then
        echo "Error: $script encountered an issue."
        exit 1
    fi
done

echo "All scripts ran successfully!"
