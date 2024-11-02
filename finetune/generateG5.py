import random
import json

# Define Grade 5-specific data for each part of the lesson plan
quick_practice_examples = {
    "Advanced Multiplication and Division": [
        "Multiply three-digit by two-digit numbers (e.g., 345 x 23)",
        "Divide four-digit numbers by one-digit numbers with remainders (e.g., 4567 ÷ 9)",
        "Solve complex word problems involving multiplication and division"
    ],
    "Fractions and Mixed Numbers": [
        "Add and subtract mixed numbers with unlike denominators",
        "Convert mixed numbers to improper fractions",
        "Multiply fractions and mixed numbers"
    ],
    "Decimals and Percentages": [
        "Convert decimals to percentages and vice versa",
        "Round decimals to the nearest hundredth",
        "Multiply and divide decimals by whole numbers"
    ],
    "Geometry: Perimeter, Area, and Volume": [
        "Calculate the perimeter of polygons",
        "Find the area of rectangles and triangles",
        "Compute the volume of rectangular prisms"
    ],
    "Data Interpretation and Graphs": [
        "Interpret data from line plots and bar graphs",
        "Create histograms and circle graphs",
        "Analyze data trends and make predictions"
    ]
}

activities = {
    "Advanced Multiplication and Division": [
        "Practice multi-step word problems with large numbers",
        "Solve multiplication and division puzzles",
        "Group activity: Create and solve real-life problems"
    ],
    "Fractions and Mixed Numbers": [
        "Use fraction bars to visualize addition and subtraction of mixed numbers",
        "Draw and convert mixed numbers and improper fractions",
        "Group activity on multiplying mixed numbers"
    ],
    "Decimals and Percentages": [
        "Use visual aids to understand decimal and percentage conversions",
        "Solve real-life problems involving decimals and percentages",
        "Practice rounding decimals with a partner"
    ],
    "Geometry: Perimeter, Area, and Volume": [
        "Use grid paper to calculate perimeter and area",
        "Build 3D shapes to understand volume",
        "Group activity on measuring classroom objects for area and perimeter"
    ],
    "Data Interpretation and Graphs": [
        "Create line plots from survey data",
        "Group activity to build and analyze a histogram",
        "Work in pairs to interpret circle graphs"
    ]
}

essential_questions = {
    "Advanced Multiplication and Division": [
        "How do multiplication and division apply to real-world scenarios?",
        "Why are larger numbers important to understand in operations?"
    ],
    "Fractions and Mixed Numbers": [
        "How do fractions represent parts of a whole?",
        "Why is it useful to work with mixed numbers in daily life?"
    ],
    "Decimals and Percentages": [
        "What is the relationship between decimals and percentages?",
        "How are decimals used in measuring and comparing values?"
    ],
    "Geometry: Perimeter, Area, and Volume": [
        "How do we measure the size and space of different shapes?",
        "Why is understanding volume important for real-world problems?"
    ],
    "Data Interpretation and Graphs": [
        "How can data be organized to show trends?",
        "Why is data interpretation essential in making decisions?"
    ]
}

assessments = {
    "Advanced Multiplication and Division": [
        "Quiz on multi-digit multiplication and division",
        "Solve real-life word problems involving large numbers"
    ],
    "Fractions and Mixed Numbers": [
        "Quiz on addition, subtraction, and multiplication of mixed numbers",
        "Convert mixed numbers to improper fractions and vice versa"
    ],
    "Decimals and Percentages": [
        "Quiz on decimal rounding and percentage conversion",
        "Solve real-life scenarios involving decimals and percentages"
    ],
    "Geometry: Perimeter, Area, and Volume": [
        "Calculate the perimeter and area of various shapes",
        "Volume quiz with real-life object examples"
    ],
    "Data Interpretation and Graphs": [
        "Analyze data in a line plot and answer questions",
        "Create and interpret a histogram from a data set"
    ]
}

# Function to generate a lesson plan in text format for the assistant message
def generate_lesson_plan_text(topic):
    quick_practice = random.choice(quick_practice_examples.get(topic, ["Review basic concepts"]))
    shuffled_activities = random.sample(activities.get(topic, ["Activity 1", "Activity 2", "Activity 3"]), k=3)
    shuffled_essential_questions = random.sample(essential_questions.get(topic, ["What is this concept?", "How can we apply this concept?"]), k=2)
    shuffled_assessments = random.sample(assessments.get(topic, ["Quiz on topic basics", "Create a problem related to topic"]), k=2)

    lesson_plan_text = f"""
    Quick practice (questions level below the given subject):
    - {quick_practice}

    Daily routine:
        Activity 1: {shuffled_activities[0]}
        Activity 2: {shuffled_activities[1]}
        Activity 3: {shuffled_activities[2]}

    Essential questions:
        1. {shuffled_essential_questions[0]}
        2. {shuffled_essential_questions[1]}

    Assessments:
        1. {shuffled_assessments[0]}
        2. {shuffled_assessments[1]}
    """
    return lesson_plan_text.strip()

# Define topics and initialize a set to store unique generated content
topics = ["Advanced Multiplication and Division", "Fractions and Mixed Numbers", "Decimals and Percentages", "Geometry: Perimeter, Area, and Volume", "Data Interpretation and Graphs"]
unique_lesson_plans = set()

# Set the number of variations per topic
num_variations = 3
json_data = []

# Generate structured message data for each topic with multiple variations
for topic in topics:
    count = 0
    while count < num_variations:
        prompt = f"Generate a lesson plan for Grade 5, Math, {topic}"
        completion_text = generate_lesson_plan_text(topic)
        
        # Ensure uniqueness by checking if the completion_text already exists in the set
        if completion_text not in unique_lesson_plans:
            unique_lesson_plans.add(completion_text)
            json_data.append({
                "messages": [
                    {"role": "system", "content": "You are an educational assistant that creates structured lesson plans for specific topics, grade levels, and subjects."},
                    {"role": "user", "content": prompt},
                    {"role": "assistant", "content": completion_text}
                ]
            })
            count += 1

# Write to JSONL file
with open("lesson_plans.jsonl", "a") as f:
    for entry in json_data:
        f.write(json.dumps(entry) + "\n")
