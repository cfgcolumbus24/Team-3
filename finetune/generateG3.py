import random
import json

# Define Grade 3-specific data for each part of the lesson plan
quick_practice_examples = {
    "Addition and Subtraction within 1,000": [
        "Add two three-digit numbers with carrying (e.g., 456 + 378)",
        "Subtract three-digit numbers with borrowing (e.g., 652 - 489)",
        "Identify addition and subtraction in word problems within 1,000"
    ],
    "Multiplication and Division Concepts": [
        "Multiply single-digit numbers (e.g., 4 x 3)",
        "Divide numbers with no remainder (e.g., 20 ÷ 5)",
        "Identify multiplication and division in simple word problems"
    ],
    "Understanding Fractions": [
        "Identify and shade fractions (e.g., color 1/4 of a square)",
        "Compare fractions with the same denominator (e.g., 3/5 and 4/5)",
        "Place simple fractions on a number line (e.g., mark 1/2 on a line from 0 to 1)"
    ],
    "Place Value and Rounding": [
        "Identify the place value of digits in numbers up to 1,000",
        "Round two-digit numbers to the nearest ten (e.g., round 47 to 50)",
        "Compare three-digit numbers using <, >, and = symbols"
    ],
    "Measurement and Data": [
        "Measure objects using centimeters and meters",
        "Read a bar graph to answer questions about data",
        "Tell time to the nearest five minutes"
    ]
}

activities = {
    "Addition and Subtraction within 1,000": [
        "Add and subtract using number lines or base-ten blocks",
        "Practice addition and subtraction with three-digit flashcards",
        "Solve word problems involving addition and subtraction up to 1,000"
    ],
    "Multiplication and Division Concepts": [
        "Use groups of objects to show multiplication and division",
        "Practice basic multiplication and division facts with flashcards",
        "Solve simple word problems involving sharing or grouping"
    ],
    "Understanding Fractions": [
        "Use fraction circles to demonstrate halves, thirds, and quarters",
        "Draw and shade parts of shapes to represent fractions",
        "Compare fractions with the same denominator using visual aids"
    ],
    "Place Value and Rounding": [
        "Use place value charts to break down three-digit numbers",
        "Practice rounding with number lines",
        "Play games comparing numbers using place value understanding"
    ],
    "Measurement and Data": [
        "Measure classroom objects in centimeters and meters",
        "Read and create simple bar graphs",
        "Practice telling time using analog and digital clocks"
    ]
}

essential_questions = {
    "Addition and Subtraction within 1,000": [
        "How can we add and subtract larger numbers?",
        "Why is it important to know addition and subtraction in daily life?"
    ],
    "Multiplication and Division Concepts": [
        "What does multiplication mean?",
        "How is division different from multiplication?"
    ],
    "Understanding Fractions": [
        "What is a fraction?",
        "How can we use fractions to describe parts of a whole?"
    ],
    "Place Value and Rounding": [
        "What is place value, and why does it matter?",
        "How does rounding help us simplify numbers?"
    ],
    "Measurement and Data": [
        "How do we measure different objects?",
        "Why is it helpful to use graphs to show information?"
    ]
}

assessments = {
    "Addition and Subtraction within 1,000": [
        "Quiz on addition and subtraction within 1,000",
        "Solve word problems that involve adding and subtracting three-digit numbers"
    ],
    "Multiplication and Division Concepts": [
        "Quiz on basic multiplication and division facts",
        "Create a story problem using multiplication or division"
    ],
    "Understanding Fractions": [
        "Identify and shade fractions in shapes",
        "Compare fractions with the same denominator on a quiz"
    ],
    "Place Value and Rounding": [
        "Quiz on place value up to hundreds",
        "Practice rounding two-digit numbers to the nearest ten"
    ],
    "Measurement and Data": [
        "Measure objects around the classroom in centimeters and meters",
        "Interpret data on a bar graph and answer questions"
    ]
}

# Function to generate a lesson plan in text format for the assistant message
def generate_lesson_plan_text(topic):
    quick_practice = random.choice(quick_practice_examples.get(topic, ["Review basic concepts"]))
    activity1 = random.choice(activities.get(topic, ["Activity 1"]))
    activity2 = random.choice(activities.get(topic, ["Activity 2"]))
    activity3 = random.choice(activities.get(topic, ["Activity 3"]))
    essential_question1 = random.choice(essential_questions.get(topic, ["What is this concept?"]))
    essential_question2 = random.choice(essential_questions.get(topic, ["How can we apply this concept?"]))
    assessment1 = random.choice(assessments.get(topic, ["Quiz on topic basics"]))
    assessment2 = random.choice(assessments.get(topic, ["Create a problem related to topic"]))

    lesson_plan_text = f"""
    Quick practice (questions level below the given subject):
    - {quick_practice}

    Daily routine:
        Activity 1: {activity1}
        Activity 2: {activity2}
        Activity 3: {activity3}

    Essential questions:
        1. {essential_question1}
        2. {essential_question2}

    Assessments:
        1. {assessment1}
        2. {assessment2}
    """
    return lesson_plan_text.strip()

# Define topics and structure the data for JSON with messages format
topics = ["Addition and Subtraction within 1,000", "Multiplication and Division Concepts", "Understanding Fractions", "Place Value and Rounding", "Measurement and Data"]
json_data = []

# Set the number of variations per topic
num_variations = 3

# Generate structured message data for each topic with multiple variations
for topic in topics:
    for _ in range(num_variations):
        prompt = f"Generate a lesson plan for Grade 3, Math, {topic}"
        completion_text = generate_lesson_plan_text(topic)
        
        json_data.append({
            "messages": [
                {"role": "system", "content": "You are an educational assistant that creates structured lesson plans for specific topics, grade levels, and subjects."},
                {"role": "user", "content": prompt},
                {"role": "assistant", "content": completion_text}
            ]
        })

# Append to the JSONL file without overwriting
with open("lesson_plans.jsonl", "a") as f:
    for entry in json_data:
        f.write(json.dumps(entry) + "\n")
