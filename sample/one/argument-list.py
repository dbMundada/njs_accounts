# import json

# def process_json(input_file, output_file):
#     with open(input_file, 'r') as f:
#         data = json.load(f)

#     processed_data = []

#     for item in data.get('sinkProcessing', []):
#         sink_id = item.get('sinkId', '')
#         occurrences = item.get('occurrences')

#         if sink_id not in ["ThirdParties.SDK.Pixel.Google.TagManager", "ThirdParties.SDK.Segment.Analytics", "ThirdParties.SDK.Pixel.Segment", "ThirdParties.SDK.Google.TagManager"]:
#             continue
#         if occurrences is None:
#             continue

#         for occurrence in occurrences:
#             lineNumber = occurrence.get('lineNumber')
#             fileName = occurrence.get('fileName')
#             arguments = occurrence.get('arguments', [])

#             processed_item = {
#                 'sinkId': sink_id,
#                 'lineNumber': lineNumber,
#                 'sample': occurrence.get('sample', ''),
#                 'fileName': fileName,
#                 'arguments': dict(arguments) if isinstance(arguments, list) else {}
#             }
#             processed_data.append(processed_item)

#     with open(output_file, 'w') as f:
#         json.dump(processed_data, f, indent=4)

# # Example usage
# input_file = './.privado/privado.json'
# output_file = 'output.json'
# process_json(input_file, output_file)
