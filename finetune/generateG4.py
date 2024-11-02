import random
import json

# Define Grade 4-specific data for each part of the lesson plan
quick_practice_examples = {
    "Multi-Digit Addition and Subtraction": [
        "Add two four-digit numbers with carrying (e.g., 3,456 + 2,789)",
        "Subtract four-digit numbers with borrowing (e.g., 6,432 - 2,145)",
        "Solve word problems involving multi-digit addition and subtraction"
    ],
    "Multiplication and Division Facts and Strategies": [
        "Multiply two-digit by one-digit numbers (e.g., 34 x 6)",
        "Divide three-digit numbers by one-digit numbers with remainders (e.g., 125 ÷ 6)",
        "Use multiplication and division facts to solve word problems"
    ],
    "Fractions and Decimals": [
        "Identify equivalent fractions (e.g., 1/2 = 2/4)",
        "Compare fractions with different denominators",
        "Convert fractions to decimals (e.g., 1/4 = 0.25)"
    ],
    "Place Value and Rounding to 10,000": [
        "Identify place value up to 10,000 (thousands, hundreds, tens, units)",
        "Round four-digit numbers to the nearest ten, hundred, or thousand",
        "Compare and order four-digit numbers"
    ],
    "Geometry: Lines, Angles, and Shapes": [
        "Identify types of lines (parallel, perpendicular, intersecting)",
        "Recognize different angles (acute, right, obtuse)",
        "Identify properties of shapes (e.g., rectangles, triangles)"
    ]
}

activities = {
    "Multi-Digit Addition and Subtraction": [
        "Practice adding and subtracting four-digit numbers using base-ten blocks",
        "Solve multi-digit addition and subtraction word problems",
        "Play a math game focused on addition and subtraction"
    ],
    "Multiplication and Division Facts and Strategies": [
        "Use flashcards to practice multiplication and division facts",
        "Solve multi-step word problems involving multiplication and division",
        "Group activity: Practice division with remainders using manipulatives"
    ],
    "Fractions and Decimals": [
        "Use fraction strips to explore equivalent fractions",
        "Draw and shade parts of shapes to represent different fractions",
        "Practice converting simple fractions to decimals"
    ],
    "Place Value and Rounding to 10,000": [
        "Use place value charts to break down numbers up to 10,000",
        "Round numbers to the nearest ten, hundred, or thousand",
        "Play a rounding and comparison game with four-digit numbers"
    ],
    "Geometry: Lines, Angles, and Shapes": [
        "Identify and draw types of lines and angles",
        "Use a protractor to measure angles",
        "Explore shapes and their properties through hands-on activities"
    ]
}

essential_questions = {
    "Multi-Digit Addition and Subtraction": [
        "How do we add and subtract larger numbers?",
        "Why is it important to understand place value when adding and subtracting?"
    ],
    "Multiplication and Division Facts and Strategies": [
        "How are multiplication and division related?",
        "When do we use multiplication and division in real life?"
    ],
    "Fractions and Decimals": [
        "What are fractions and how are they used?",
        "How can we represent fractions as decimals?"
    ],
    "Place Value and Rounding to 10,000": [
        "What does place value mean for larger numbers?",
        "Why is rounding useful in everyday life?"
    ],
    "Geometry: Lines, Angles, and Shapes": [
        "What are the different types of lines and angles?",
        "How do the properties of shapes help us understand geometry?"
    ]
}

assessments = {
    "Multi-Digit Addition and Subtraction": [
        "Quiz on multi-digit addition and subtraction",
        "Solve real-life word problems involving four-digit addition and subtraction"
    ],
    "Multiplication and Division Facts and Strategies": [
        "Multiplication and division quiz",
        "Create a story problem using multiplication or division"
    ],
    "Fractions and Decimals": [
        "Identify and compare fractions on a quiz",
        "Convert fractions to decimals in a practice worksheet"
    ],
    "Place Value and Rounding to 10,000": [
        "Quiz on place value up to 10,000",
        "Practice rounding numbers to the nearest ten, hundred, or thousand"
    ],
    "Geometry: Lines, Angles, and Shapes": [
        "Identify types of lines and angles in a quiz",
        "Classify shapes based on their properties"
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
topics = ["Multi-Digit Addition and Subtraction", "Multiplication and Division Facts and Strategies", "Fractions and Decimals", "Place Value and Rounding to 10,000", "Geometry: Lines, Angles, and Shapes"]
json_data = []

# Set the number of variations per topic
num_variations = 3

# Generate structured message data for each topic with multiple variations
for topic in topics:
    for _ in range(num_variations):
        prompt = f"Generate a lesson plan for Grade 4, Math, {topic}"
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
