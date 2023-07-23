import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Read data from CSV and convert it to a list of dictionaries
    with open(csv_file_path, 'r', newline='') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        data = list(csv_reader)

    # Write the data to a JSON file
    with open(json_file_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)

if __name__ == "__main__":
    csv_file_path = "MOCK_DATA (1).csv"  # Replace with the path of your CSV file
    json_file_path = "output.json"  # Replace with the desired output JSON file path
    csv_to_json(csv_file_path, json_file_path)
