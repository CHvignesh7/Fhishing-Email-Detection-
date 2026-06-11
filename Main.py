import subprocess
import os
import time

project_dir = os.path.dirname(os.path.abspath(__file__))

# Start the Flask backend server
subprocess.Popen(
    ["cmd", "/k", "python Api.py"],
    cwd=os.path.join(project_dir, "backend"),
    creationflags=subprocess.CREATE_NEW_CONSOLE
)

time.sleep(5)

# Start the React frontend dev server
subprocess.Popen(
    ["cmd", "/k", "npm run dev"],
    cwd=os.path.join(project_dir, "frontend"),
    creationflags=subprocess.CREATE_NEW_CONSOLE
)

print("Backend Running")
print("Frontend Running")